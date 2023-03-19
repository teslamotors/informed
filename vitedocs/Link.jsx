import { useNavigate } from 'react-router-dom';
import { Link as AdobeLink } from '@adobe/react-spectrum';

export const Link = ({ children, href, ...rest }) => {
  const navigate = useNavigate();

  const onClick = e => {
    // e.preventDefault();
    navigate(href);
  };

  return <AdobeLink onPress={onClick}>{children}</AdobeLink>;
};
