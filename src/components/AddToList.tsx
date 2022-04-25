import React,{useState} from 'react'
import {Props} from '../App'

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList:React.FC<IProps> = ({people, setPeople}) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        note: "",
        img: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      setInput({ ...input, [e.target.name]: e.target.value });
    };
    const handleClick = (): void => {
        if(!input.name || !input.age || !input.img){
            return 
        }
        setPeople([...people,{
            name: input.name,
            age: parseInt(input.age),
            url: input.img,
            note: input.note
        }]);
        setInput({
          name: "",
          age: "",
          note: "",
          img: "",
        });
    }
  return (
    <div className="AddToList">
      <input
        type="text"
        className="AddToList-input"
        value={input.name}
        placeholder="Name"
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        className="AddToList-input"
        value={input.age}
        placeholder="Age"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        className="AddToList-input"
        value={input.img}
        placeholder="Image URL"
        onChange={handleChange}
        name="img"
      />
      <textarea
        className="AddToList-input"
        value={input.note}
        placeholder="Notes"
        onChange={handleChange}
        name="note"
      />
      <button className='AddToList-btn' onClick={handleClick}>Add To List</button>
    </div>
  );
}

export default AddToList