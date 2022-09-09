import './FaceRecognition.css';

const FaceRecognition = (props) => {
    if(props.imageUrl === "") {
        return(
            <div className="faceRecognition"></div>
        );
    } else {
        return(
            <div className="faceRecognition">
                <img 
                    onLoad={props.onLoad}
                    src={props.imageUrl}
                    alt="" 
                    width="500" 
                    height="auto"
                />
            </div>
        );
    }
}

export default FaceRecognition;