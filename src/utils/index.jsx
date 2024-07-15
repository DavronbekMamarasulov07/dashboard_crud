import { Typography } from "antd";

const { Title }  = Typography;

const DashboardContentTitle = ({children}) => {
  return (
    <Title level={3}>
        {children}
    </Title>
  )
}

const saveToLocalStorage = (key,data) =>{
  if(typeof data === "object" && data !== null){
      localStorage.setItem(key, JSON.stringify(data))
  }
  else{
      localStorage.setItem(key,data)
  }

}

export {DashboardContentTitle ,saveToLocalStorage }


 