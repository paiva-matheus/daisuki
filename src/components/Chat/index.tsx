import { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Modal, Comment, Avatar, Tooltip, Input, Button } from "antd";
import InputEmoji from "react-input-emoji";
import {
  StyledModal,
  MessageSentStyled,
  MessageReceivedStyled,
  BoxMessages,
  FormStyled,
  ButtonStyled,
  InputArea,
} from "./styles";
import AvatarEmanu from "../../assets/img/avatar-emanuela.png";
import moment from "moment";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import { useUser } from "../../hooks/User";
import DefaultAvatar from "../../assets/img/default-user-avatar.png";

interface MessageInterface {
  msg: string;
  socketIdUser: string;
  name: string;
  avatarUrl: string;
}

const socket = io("https://daisuki-chat-back.herokuapp.com");
const { TextArea } = Input;

const Chat = () => {
  const [messages, setMessages] = useState<MessageInterface[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [socketId, setSocketId] = useState<string>("");

  const [isModalVisible, setIsModalVisible] = useState(false);
  const { user } = useUser();

  const sendMessage = () => {
    if (inputMessage) {
      socket.emit(
        "chat message",
        [
          ...messages,
          {
            msg: inputMessage,
            socketIdUser: socketId,
            name: user.username,
            avatarUrl: user.avatarUrl,
          },
        ].slice(-5)
      );
      // TODO: limpar o input em si
      // setInputMessage("");
    }
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    socket.on("chat message", (msg) => {
      setMessages(msg);
    });
  });

  useEffect(() => {
    socket.on("connect", () => {
      setSocketId(socket.id);
    });
  }, []);
  return (
    <>
      <button onClick={showModal}>Chat</button>
      <StyledModal
        title="Chat dos otaku"
        visible={isModalVisible}
        onCancel={handleCancel}
      >
        <FormStyled>
          <BoxMessages>
            {messages.map((message, index) => {
              if (message.socketIdUser === socketId) {
                return (
                  <MessageSentStyled
                    author={message.name}
                    avatar={<Avatar src={message.avatarUrl ?? DefaultAvatar} />}
                    content={<p>{message.msg}</p>}
                    datetime={
                      <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                        <span>{moment().fromNow()}</span>
                      </Tooltip>
                    }
                    key={index}
                  />
                );
              }
              return (
                <MessageReceivedStyled
                  author={message.name}
                  avatar={<Avatar src={message.avatarUrl ?? DefaultAvatar} />}
                  content={<p>{message.msg}</p>}
                  datetime={
                    <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
                      <span>{moment().fromNow()}</span>
                    </Tooltip>
                  }
                  key={index}
                />
              );
            })}
          </BoxMessages>
          <InputArea>
            <InputEmoji
              value={inputMessage}
              onChange={setInputMessage}
              cleanOnEnter
              // onEnter={handleOnEnter}
              onEnter={sendMessage}
              placeholder="Type a message"
            />
            {/* <button>Enviar</button> */}
          </InputArea>
        </FormStyled>
      </StyledModal>
    </>
  );
};
export default Chat;
