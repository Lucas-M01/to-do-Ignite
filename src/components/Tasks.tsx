import { Trash } from 'phosphor-react'
import styles from './Tasks.module.css'
import * as Accordion from '@radix-ui/react-accordion'

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

    return(
        <Accordion.Content className={styles.contentAccordion}>
            <div>
                ,fdçflsdfdsfdfdsdasdasdsadsdsadasdsadasdasd
            </div>
            <button className={styles.trash}>
                <Trash size={20} onClick={handleDeleteTask} />
            </button>
        </Accordion.Content>
    )
}