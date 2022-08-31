import { Trash } from 'phosphor-react'
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

    return(
        <div className={styles.tasks}>
            <div className={styles.containerCheck}>
                <div className={styles.round}>
                    <input type="checkbox" id={`${id}`} checked={isCompleted} className={styles.checkbox} onChange={()=> handleCompleteTask()} />
                    <label htmlFor={`${id}`} ></label>
                </div>
            </div>
                    
            <label htmlFor={`${id}`} className={isCompleted ? styles.isCompleted : styles.content}>
                {content}
            </label>

            <button className={styles.trash}>
                <Trash size={20} onClick={handleDeleteTask} />
            </button>
        </div>
    )
}