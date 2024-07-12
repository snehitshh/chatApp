/*import{MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'
const ChatsPage = () => {
   const chatProps=useMultiChatLogic('d40cf949-ee54-458a-a814-2e7513409b50',
    props.user.username,
    props.user,secret);
  
  return (
  <div style={{height:'100vh '}}>
    <MultiChatSocket {...chatProps}/>
    <MultiChatWindow {...chatProps} style={{height:'100%'}}/>
  </div>
  )
}
  export default ChatsPage;*/

  import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div className="background">
      <PrettyChatWindow
        projectId={import.meta.env.VITE_CHAT_ENGINE_PROJECT_ID}
        username={props.user.username}
        secret={props.user.secret}
      />
    </div>
  );
};

export default ChatsPage;