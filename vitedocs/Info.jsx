import { Well, Flex } from '@adobe/react-spectrum';
import InfoOutline from '@spectrum-icons/workflow/InfoOutline';

export const Info = ({ children }) => {
  return (
    <div className="info-box">
      <Well>
        <Flex gap="size-100">
          <InfoOutline size="S" color="informative" />
          <div className="info">{children}</div>
        </Flex>
      </Well>
    </div>
  );
};
