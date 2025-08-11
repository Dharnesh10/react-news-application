import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsList({ title = '', author = 'Unknown', description = '', content = '', image, url }) {
  const [showFullTitle, setShowFullTitle] = useState(false);
  const [showFullContent, setShowFullContent] = useState(false);

  return (
    <Card className="h-100 shadow-sm border-0 rounded-3">
      <Card.Img
        variant="top"
        src={image}
        alt={title}
        style={{ height: '180px', objectFit: 'cover' }}
      />
      <Card.Body>
        {/* Title with toggle */}
        <Card.Title className="fw-bold">
          {showFullTitle ? title : title.slice(0, 50)}
          {title.length > 50 && (
            <span
              className="text-primary text-muted"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowFullTitle(!showFullTitle)}
            >
              {showFullTitle ? ' Show Less' : '...'}
            </span>
          )}
        </Card.Title>

        {/* Author */}
        <Card.Subtitle className="mb-2 text-muted small">
          By {author}
        </Card.Subtitle>

        {/* Description */}
        <Card.Text className="text-truncate" style={{ maxHeight: '4.5em' }}>
          {description}
        </Card.Text>

        {/* Content with toggle */}
        <Card.Text className="small text-muted">
          {showFullContent ? content : content?.slice(0, 80)}
          {content.length > 80 && (
            <span
              className="text-primary"
              style={{ cursor: 'pointer' }}
              onClick={() => setShowFullContent(!showFullContent)}
            ><br/>
              {showFullContent ? ' Show Less' : 'Read more'}
            </span>
          )}
        </Card.Text>

        {/* Read More button */}
        <Button variant="danger" className="w-100" href={url} target="_blank">
          Read More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default NewsList;
