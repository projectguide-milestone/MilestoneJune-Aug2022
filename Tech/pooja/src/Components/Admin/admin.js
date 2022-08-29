import { useEffect, useState } from 'react';
import {Table }from 'react-bootstrap';
import {useNavigate , Link} from 'react-router-dom';
import Axios from 'axios';
import "./admin.css";
import HeadTitle from "../../Common/HeadTitle/HeadTitle";


export const Admin = () => {

    const history = useNavigate();
    const nextPath = () => {
        history('/update')
    }

    const [news, setNews] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/getnews').then((res) => {
            console.log(res);
            setNews(res.data);
            console.log(news);
        });
    }, []);

    const getNews = () => {
        /*Axios.get('http://localhost:3001/getnews').then((res) => {
            console.log(res);
            setNews(res.data);
            console.log(news);
        });*/
    }

    const deleteNews =(e, id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            alert("News deleted")
        })
    }

    return (
        <div>
            <div className='d-flex table-bordered'>
            <HeadTitle />
                <h2><center>News Record</center></h2>
                <br/><br/>
            </div>
       
            <p><Link to="/create" className='primary-btn'>Add New Category</Link> </p>
            <br/><br/>
            <table >
                <thead>
                    <tr>
                        <th>News Id</th>
                        <th>News Category</th>
                        <th>Title</th>
                        <th>News Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>{
                    news.map(newsdata => {
                        return(
                        <tr>
                            <td>{newsdata.news_id}</td>
                            <td>{newsdata.news_category}</td>
                            <td>{newsdata.title}</td>
                            <td>{newsdata.news_description}</td>
                            <td>
                                <button onClick={() => history(`/update/${newsdata.news_id}`)} className='success'>Edit</button>
                                <button onClick={(e) => deleteNews(e, newsdata.news_id)} className='danger'>Delete</button>
                            </td>
                        </tr>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    )
}