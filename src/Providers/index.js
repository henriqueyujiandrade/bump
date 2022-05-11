import { TasksProvider } from "./Tasks"

const Providers = ({children}) => {

    return (        
            <TasksProvider>
                {children}
            </TasksProvider>        
    )
}

export default Providers