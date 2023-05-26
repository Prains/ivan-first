"use client"
import {
    Button,
    Modal, ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import Image from "next/image";
import {cardImage} from "@/images/Main";
import StarRating from "@/components/ui/StarRating/StarRating";
import {useState} from "react";
import IsolatedTextArea from "@/components/ui/IsolatedTextArea/IsolatedTextArea";

function IsolatedModal({title,image,date}) {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [text, setText] = useState('')
    // rating stars
    const [currentValue, setCurrentValue] = useState(0)
    const [hoverValue, setHoverValue] = useState(undefined)

    const handleClick = (value) => {
        setCurrentValue(value)
    }
    const handleMouseOver = (value)=> {
        setHoverValue(value)
    }

    const handleMouseLeave = (value)=> {
        setHoverValue(undefined)
    }
    return (
        <form>
            <Button className='md:w-[120px] lg:w-[240px] text-[#D9D9D9] bg-[#E74362] border-[#D9D9D9]  mt-[8px] rounded-[6px]' onClick={onOpen}>Оставить отзыв</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent className='p-[16px] bg-[#0E1A30]'>
                    <ModalHeader className='grid grid-cols-7'>
                        <div className='mr-[16px] col-span-2'>
                            <Image className='rounded-[6px] h-[88px] object-cover' src={image} alt='картинка' />
                        </div>
                        <div className='col-span-3'>
                            <h3 className='text-white text-[24px] font-medium'>{title}</h3>
                            <p className='w-[60%] mt-[10px] text-[14px] text-[#D9D9D9]'>{date}</p>
                        </div>
                        <div className='col-span-2 flex flex-col justify-end'>
                            <StarRating handleClick={handleClick} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} currentValue={currentValue} hoverValue={hoverValue}/>
                        </div>
                    </ModalHeader>
                    <ModalCloseButton/>
                    <ModalBody >
                        <IsolatedTextArea  value={text} onChangeText={e => setText(e.target.value)}  placeholder='Huielooee' className='w-[100%] mt-[18px] bg-white border-0 text-black mb-[24px]'/>
                    </ModalBody>

                    <ModalFooter className={'flex justify-between gap-[18px]'}>
                        <Button type='submit' className='w-[100%] bg-[#E74362]' colorScheme='red' mr={3} onClick={onClose}>
                            Готово
                        </Button>
                        <Button onClick={onClose} className='w-[100%]' variant='red'>Отменить</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </form>
    )
}

export default IsolatedModal;