import { Col, Row } from 'antd'
import React from 'react'
import { useSearchParams } from 'react-router-dom';

export default function Header(
  {
    tableData,
    setDataTable,
    statusCompleted,
    statusOnHold,
    statusOnRoad
  }) {
    const onClick =(clickedStatus)=>{
      window.location.href="?status=" + clickedStatus
    }
    
  return (
    <>
        <Row>
            <Col span={8} style={{backgroundColor: "#b2b21a", color: "white"}} onClick={()=>onClick("OnRoad")}>{statusOnRoad.length}On Road</Col>
            <Col span={8} style={{backgroundColor: "green", color: "white"}} onClick={()=>onClick("Completed")}>{statusCompleted.length}Completed</Col>
            <Col span={8} style={{backgroundColor: "red", color: "white"}} onClick={()=>onClick("OnHold")}>{statusOnHold.length}On Hold</Col>
        </Row>
    </>
  )
}
