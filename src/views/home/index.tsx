import { HStack } from '@chakra-ui/react';

import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <HStack>
        <Button colorPalette="primary">Click1</Button>
        <Button colorPalette="primary">Click2</Button>
      </HStack>
    </div>
  );
};

export default HomePage;
