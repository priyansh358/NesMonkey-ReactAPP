import React from 'react'

const NewsItem =(props) => {

        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display:"flex",
                        justifyContent:"flex-end",
                        position:"absolute",
                        right:"0"
                    }}>
                        <span className="badge rounded-pill bg-danger"
                            >{source}
                            <span className="visually-hidden"></span>
                        </span>
                    </div>
                    <img src={imageUrl ? imageUrl : "https://images.moneycontrol.com/static-mcnews/2019/09/Microsoft-image-Reuters-770x433.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
                }

export default NewsItem
