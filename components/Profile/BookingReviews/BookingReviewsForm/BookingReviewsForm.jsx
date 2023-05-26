"use client"
import  {useState} from 'react';
import StarRating from "@/components/ui/StarRating/StarRating";
import IsolatedTextArea from "@/components/ui/IsolatedTextArea/IsolatedTextArea";
import IsolatedButton from "@/components/ui/IsolatedButton/IsolatedButton";

const BookingReviewsForm = () => {
    // textarea

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
            <div className='mt-[16px] mb-[18px]'>
                <StarRating handleClick={handleClick} handleMouseOver={handleMouseOver} handleMouseLeave={handleMouseLeave} currentValue={currentValue} hoverValue={hoverValue}/>
            </div>
            <div>
                <IsolatedTextArea value={text} onChangeText={e => setText(e.target.value)}  placeholder='Huielooee' className='mt-[18px] bg-white border-0 text-black mb-[24px]'/>
            </div>
            <div className='flex items-center justify-between gap-[8px] w-[100%]'>
                <IsolatedButton type="submit" className='bg-[#E74362] flex-1'>Готово</IsolatedButton>
                <IsolatedButton type="submit" className='bg-transparent flex-1 border-[#8E8E8E] border-2 text-[#8E8E8E]'>Отмена</IsolatedButton>
            </div>
        </form>
    );
};

export default BookingReviewsForm;