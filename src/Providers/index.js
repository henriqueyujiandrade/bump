import { ChatProvider } from "./Chat"
import { GroupProvider } from "./Group"
import { MemberProvider } from "./Member"
import { TasksProvider } from "./Tasks"

const Providers = ({children}) => {

    return ( 
            <GroupProvider>
            <MemberProvider>    
            <TasksProvider>
                <ChatProvider>           
                {children}
                </ChatProvider> 
            </TasksProvider>
            </MemberProvider> 
            </GroupProvider>          
    )
}

export default Providers