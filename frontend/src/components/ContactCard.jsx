import React from 'react'
import { Avatar, Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, useToast } from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { useColorModeValue } from '@chakra-ui/react';
import { EditModal } from './EditModal';

export const ContactCard = ({contact, setContact}) => {
    return (
		
		<Card> 
			<Flex>
				<img src={useColorModeValue('chrispyIT_black.png', 'chrispyIT_color.png')} width={70}/>
				<Flex pl={"65%"}>
				<EditModal/>
						<IconButton
							variant='ghost'	
							colorScheme='blue'						
							size={"sm"}
							aria-label='See menu'
							icon={<BiTrash size={20} />}
							
						/>
						</Flex>
				</Flex>
			
			<CardHeader>			
							<Flex gap={4} >
					<Flex flex={"1"} gap={"4"} alignItems={"center"} >
						<Avatar src={"https://avatar.iran.liara.run/public/"} />

						<Box >
							<Heading size='sm'>{contact.name}</Heading>
							<Text>{contact.email}</Text>
							<Text>{contact.role}</Text>							
						</Box>
					</Flex>

					<Flex>
						
						
					</Flex>
				</Flex>
			</CardHeader>

			<CardBody >
				<Text>{contact.description}</Text>
			</CardBody>
		</Card>
	);
}

