import { CheckCircle, Circle, Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './Tasks.module.css'

interface TasksProps {
    id: string;
    content: string;
    isCompleted?: boolean;
    onDeleteTask: (id: string) => void;
    onCompleteTask: (id: string) => void;
}

export function Tasks({ id, content, isCompleted, onDeleteTask, onCompleteTask}: TasksProps){
    function handleDeleteTask() {
        onDeleteTask(id)
    }

    function handleCompleteTask() {
        onCompleteTask(id)
    }

    let x = false

    function mouseOver() {
        x = true
    }

    return(
        <div className={styles.tasks}>
            
            {isCompleted ? (
                <div className={styles.checked}>
                    <CheckCircle size={24} onClick={handleCompleteTask} weight="fill"   />
                </div>
            ) : (
                <div className={styles.circleDefault}>
                    <Circle size={24} onClick={handleCompleteTask} onMouseEnter={mouseOver}  />
                </div>
            )}
                    
            <label htmlFor={`${id}`} className={isCompleted ? styles.isCompleted : styles.content}>
                {content}
            </label>

            <button className={styles.trash}>
                <Trash size={20} onClick={handleDeleteTask} />
            </button>
        </div>
    )
}