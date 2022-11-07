import React, { useState } from 'react'
import { Button, Col, Input, Row, Table } from 'antd';
import MainModal from './MainModal';
import { useSearchParams } from 'react-router-dom';

export default function Main({tableData, setTableData}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchParams] = useSearchParams();

    const statusCompleted = tableData.filter(tData=>{
      return tData.status.replace(/ /g, '') === searchParams.get("status")
    })
    
    const {Search} = Input 

    const showModal = () => {
        setIsModalOpen(true);
      };

    const onSearch = (e) => setSearchText(e.target.value);

    let data = []
    if(searchParams.get("status")){
       data = statusCompleted.map(data=>{
        return{
            ...data
        }
      })
    }else{
       data = tableData.filter((val)=>{
        if (searchText === ""){
          return val
        }else if (val.name.toLowerCase().includes(searchText.toLocaleLowerCase())) {
          return val
        }
       }).map(data=>{
        return{
            ...data
        }
      })
    }
    
      
    const columns = [
        {
          title: 'JobSite Name',
          dataIndex: 'name',
          align: "center",
          render: (text, data) => <a href={`/Page2&id=${data.id}`}>{text}</a>,
        },
        {
          title: 'Address',
          dataIndex: 'status',
          align: "center"
        },
      ];
      
      
  return (
    <>
        <Row>
            <Col span={14}>I am skerdi and i am trying to recreate the flex test</Col>
            <Col span={6}><Search placeholder="input search text" onChange={onSearch} style={{ width: 200 }} /></Col>
            <Col span={4} style={{direction: "rtl"}}> <Button type="primary" onClick={showModal}>Create</Button></Col>
        </Row>
        <Table
            columns={columns}
            dataSource={data}
            pagination={false}
            title={() => 'Header'}
        />
       
        <MainModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
    
  )
}
