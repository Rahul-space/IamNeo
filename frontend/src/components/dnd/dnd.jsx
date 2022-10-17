import {useState} from 'react';
import {DragDropContext,Draggable,Droppable} from 'react-beautiful-dnd';
import mockdata from './../../dummy';
import './style.scss';
const Dnd = () => 
{
  const [data,setdata] = useState(mockdata);
  const onDragEnd=result=>{
    console.log(result);
  }
  return (
    
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="dnd">
        {
          data.map(section=>{
            <Droppable
            key={section.id}
            droppableId={section.id}
            >
              {(provided)=>(
                console.log("hello"),
                <div
                  {...provided.droppableProps}
                  className="dnd_section_title">
                    {section.title}

                </div>
              )}
            </Droppable>
          })
        }
      </div>

    </DragDropContext>
    
  )
}
 
export default Dnd