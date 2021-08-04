import React, { useState } from 'react';

//This is the first time I'm using React Hooks. If i did anything wrong please tell me :) 

//Array of object created with every items, easier to add or delete with a map function in the render, with is checked option
const itemList = [
          {name: 'Item 1', isChecked: false}, 
          {name: 'Item 2', isChecked: false}, 
          {name: 'Item 3', isChecked: false}, 
          {name: 'Item 4', isChecked: false},
      ]
function Checkboxes() {
  
    const [ bMultipleCheckboxes, selectAll ] = useState(false); // Initialise the selectAll Checkboxes to false
    const [ list , changeList ] = useState(itemList); // Create a state list with the array of object inside so the checkboxes will render everytime it is checked

  const handleSelectAll = (e, index) => { // onChange to select all checkboxes
    selectAll(e.target.checked);
    if(!bMultipleCheckboxes) {
      list.forEach((el) => {
          let newArr = [...itemList]; // Copying the array because it chage the whole array into true instead of selecting only isChecked element
          newArr[index] = el.isChecked = true;
          changeList(newArr);
        })
      } else {
        list.forEach((el) => {
          let newArr = [...itemList]; 
          newArr[index] = el.isChecked = false;
          changeList(newArr);
        })
      }
    }
    const handleCheckbox = (e, element, index) => {
        let newArr = [...itemList];
          newArr[index].isChecked = e.target.checked;
          changeList(newArr);
  }    
    return (
      <div>
      <input type="checkbox" name="selectAll" checked={bMultipleCheckboxes} onChange={handleSelectAll} /> <label>Select all</label>
        {
          itemList.map((el, index) => {
            return (
              <div key={el.name}>
                <input type='checkbox' checked={el.isChecked} onChange={(e) => { handleCheckbox(e, el, index) }}/><label>{el.name}</label>
              </div>
            )
          })
        }
      </div>
    )
  }
export default Checkboxes;

