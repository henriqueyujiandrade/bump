import { ChatProvider } from "./Chat"
import { GroupProvider } from "./Group"
import { MemberProvider } from "./Member"
import { TasksProvider } from "./Tasks"
import { LoginProvider } from "./Login"

const Providers = ({children}) => {

    return ( 
            <GroupProvider>
            <MemberProvider>    
            <TasksProvider>
            <LoginProvider>
                <ChatProvider>           
                {children}
                </ChatProvider> 
            </LoginProvider>
            </TasksProvider>
            </MemberProvider> 
            </GroupProvider>          
    )
}

export default Providers