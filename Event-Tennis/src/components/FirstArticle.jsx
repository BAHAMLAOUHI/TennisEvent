import './FirstArticle.modules.css'
import Row from './Row';
import vid from '../assets/tennis_vid.mp4';


function FirstArticle({cover,category,publishedAt,title,shortDescription}){

    return (
    
    <div className="FirstArticle">
        
        <Row>
            <div className='vid'>
        <video src={vid} autoPlay loop muted/>
        </div>
   
            
        <div>
        <div className="details">
            <span>{category}</span>
            <span>{publishedAt}</span>
        </div>
        <br/>
        <h2 className="title">
            {title}
        </h2>
        
        <p className='description'>
            {shortDescription}
        </p>
        <br/>
        

        
        </div>
        </Row>
    </div>
    
      
    )

}

export default FirstArticle;