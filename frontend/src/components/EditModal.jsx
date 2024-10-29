import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Textarea,
    useDisclosure,
    useToast,
    Text
} from "@chakra-ui/react";
import { BiEditAlt } from "react-icons/bi";

import React from 'react'

export const EditModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <IconButton
                onClick={onOpen}
                variant='ghost'
                colorScheme='blue'
                aria-label='See menu'
                size={"sm"}
                icon={<BiEditAlt size={20} />}
            />
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Edit Contact:  Hans Müller                        
                        <Text>hansmueller@at.de</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Flex alignItems={"center"} gap={4}>
                            
                            <FormControl>
                                <FormLabel>Role</FormLabel>
                                <Input placeholder='Software Engineer' />
                            </FormControl>
                        </Flex>
                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Textarea
                                resize={"none"}
                                overflowY={"hidden"}
                                placeholder="He's a software engineer who loves to code and build things."
                            />
                        </FormControl>                    
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3}>
                            Add
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}