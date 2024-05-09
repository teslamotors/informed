import { Well, Flex } from '@adobe/react-spectrum';
import InfoOutline from '@spectrum-icons/workflow/InfoOutline';

export const Info = ({ children, type = 'informative' }) => {
  return (
    <div className="info-box">
      <Well>
        <Flex gap="size-100">
          <span>
            <InfoOutline size="S" color={type} />
          </span>
          <div className="info">{children}</div>
        </Flex>
      </Well>
    </div>
  );
};
