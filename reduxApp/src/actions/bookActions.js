export function GetBooks (){
    //Giả lập dữ liệu được lấy từ server
    let books = [
        {    
            _id: 1,
            title: 'book 1',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price: 53
        },
        {    
            _id: 2,
            title: 'book 2',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price: 88
        },
        {    
            _id: 3,
            title: 'book 3',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price: 69
        },
        {    
            _id: 4,
            title: 'book 4',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price: 88
        },
        {    
            _id: 5,
            title: 'book 5',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price: 73
        },
        {    
            _id: 6,
            title: 'book 6',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price: 60
        },
        {    
            _id: 7,
            title: 'book 7',
            discription: "in this book we are going to learn how to use nodejs and reactjs to development an application",
            price:90
        }
    ]
    return {
        type: 'Get_BOOKS',
        payload: books
    };
}
export function PostBook (books){
    return {
        type: 'POST_BOOK',
        payload: books
    };
}
export function DeleteBook (id){
    return {
        type: 'DELETE_BOOK',
        payload: id
    };
}
export function UpdateBook (book){
    return {
        type: 'UPDATE_BOOK',
        payload: book
    };
}