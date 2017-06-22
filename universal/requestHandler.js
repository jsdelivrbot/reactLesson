import BookModel from'./models/book';
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {createStore,  applyMiddleware, compose} from 'redux';
import {match, RouterContext, Router, Route, IndexRoute, browserHistory} from 'react-router';
import reducers from './src/reducers';
import routes from './routes';
export function RequestHandler (req, res){
     GetBooks()
     .then(function(data){
         //b1. Tạo Redux Store trên server
         const store = createStore(reducers, {
             'books':data
         });
         //b2. Nhận trạng thái khởi tạo từ store
         const initialState = JSON.stringify(store.getState())
                                    .replace(/<\/script/g, '<\\/script')
                                    .replace(/<!--/g, '<\\!--');
         
         console.log('initialState = ', initialState);       

        //b3. Thi hành react-router trên server và cho phép clien dc 
        //bắt các request và xác định sẽ làm gi tiếp theo
        const Routes = {
            routes: routes,
            location: req.url
        }
        console.log('Routes = ', Routes);

        match(Routes, function(err, redirect, props){
            console.log('props = ', props);
            if(err){
                res.status(500).send("erro fulfiling the request")
            }
            else if(redirect){
                res.status(302, redirect.pathname + redirect.search)
            }
            else if(props){
                const reactComponent = renderToString(
                    <Provider store = {store}>
                        <RouterContext {...props}/>
                    </Provider>
                );
                res.status(200).render('index', { reactComponent, initialState })
            }
            else {
                const reactComponent = renderToString(
                    <Provider store = {store}>
                        
                    </Provider>
                );
                res.status(200).render('index', { reactComponent, initialState })

                // res.status(404).send('Không tìm thấy trang bạn yêu cầu!!');
                
                // res.status(200).render('index')
            }
        });
     });
    
}

export async function GetBooks(){
  try {
    let books = await BookModel.find({});
    return {
      books: books
    };
    
  }
  catch(err){
    console.log(err);
    throw err;
  }
}

