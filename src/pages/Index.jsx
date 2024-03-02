import React from "react";
import { Box, Flex, Text, Heading, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Container, Image } from "@chakra-ui/react";
import { FaShoppingCart, FaDollarSign, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Heading mb={6}>Business Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
        <StatBox icon={FaShoppingCart} title="Total Sales" stat="1,200" helpText="Since last month" hasIncreased={true} />
        <StatBox icon={FaDollarSign} title="Revenue" stat="$89,400" helpText="Since last month" hasIncreased={true} />
        <StatBox icon={FaUsers} title="New Customers" stat="245" helpText="Since last month" hasIncreased={false} />
        <StatBox icon={FaChartLine} title="Conversion Rate" stat="24%" helpText="Since last month" hasIncreased={true} />
      </SimpleGrid>
      <Flex mt={10} justifyContent="space-between">
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Sales Overview
          </Heading>
          <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNoYXJ0fGVufDB8fHx8MTcwOTM1MDk0N3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" boxSize="400px" />
        </Box>
        <Box>
          <Heading as="h3" size="lg" mb={4}>
            Revenue Sources
          </Heading>
          <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxyZXZlbnVlJTIwcGllJTIwY2hhcnR8ZW58MHx8fHwxNzA5MzUwOTQ4fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Revenue Chart" boxSize="400px" />
        </Box>
      </Flex>
    </Container>
  );
};

const StatBox = ({ icon, title, stat, helpText, hasIncreased }) => {
  const IconComponent = icon;
  return (
    <Stat p={6} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
      <Flex justifyContent="space-between">
        <Box>
          <StatLabel fontWeight="bold">{title}</StatLabel>
          <StatNumber>{stat}</StatNumber>
          <StatHelpText>
            <StatArrow type={hasIncreased ? "increase" : "decrease"} />
            {helpText}
          </StatHelpText>
        </Box>
        <Box>
          <IconComponent size="45px" />
        </Box>
      </Flex>
    </Stat>
  );
};

export default Index;
