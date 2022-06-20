import React from 'react';
import Card from 'react-bootstrap/Card';

const ExperiencesPanel = ({title, description, url}) => {
    return(
        <>
        <Card style={{ width: '18rem', transition: 'all .7s' }} className="panel">
            <Card.Img variant="top" src={url} style={{height:'200px'}} />
                <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                </Card.Body>
        </Card>
        </>
    );
};
export default ExperiencesPanel;