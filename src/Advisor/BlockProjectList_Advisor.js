import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttonttt: {
    margin: theme.spacing(1),
    marginRight: "32px",
    marginTop: "40px",
    marginBottom: "20px",
    float: "right" ,
  },
}));

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'projnamethai', headerName: 'ProjNameTH', width: 200 },
  { field: 'projnameeng', headerName: 'ProjNameEN', width: 200 },
  { field: 'id1', headerName: 'Student ID 1', width: 110 },
  {
    field: 'fullName1',
    headerName: 'Std Name 1',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.getValue('member1firstname') || ''} ${params.getValue('member1lastname') || ''}`,
  },
  { field: 'semester1', headerName: 'Std Type', width: 100 },
  { field: 'id2', headerName: 'Student ID 2', width: 110 },
  {
    field: 'fullName2',
    headerName: 'Std Name 1',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params) =>
      `${params.getValue('member2firstname') || ''} ${params.getValue('member2lastname') || ''}`,
  },
  { field: 'semester2', headerName: 'Std Type', width: 100 },
  { field: 'advisor', headerName: 'AdvId', width: 150 },
  { field: 'commitee1', headerName: 'Comm1', width: 100 },
  { field: 'commitee2', headerName: 'Comm2', width: 100},
  { field: 'commitee3', headerName: 'Comm3', width: 100 },
];

const rows = [
  { id: 1, 
      projnamethai: 'ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2', 
      projnameeng: 'ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2' , 
      id1: '6009610426', 
      member1firstname: 'ภูริช' , 
      member1lastname: 'อภิชลติ' ,
      semester1: 'R',
      id2: '6009650075', 
      member2firstname: 'สุพิชชา' ,
      member2lastname: 'รัตนไตรมาส' ,
      semester2: 'S',
      advisor: 'Nutchakorn Ngamsaowaros',
  },
  { id: 2, 
    projnamethai: 'สต็อกสินค้ารองเท้า', 
    projnameeng: 'STOCK SHOES' , 
    id1: '6009650125', 
    member1firstname: 'โชติกา' , 
    member1lastname: 'โพธิปัญญา' ,
    semester1: 'S',
    id2: '6009650117', 
    member2firstname: 'วิทัศน์' ,
    member2lastname: 'จันอุไรรัตน์' ,
    semester2: 'S',
    advisor: 'Nutchakorn Ngamsaowaros',
  },
  { id: 3, 
    projnamethai: 'ระบบจองบริการล้างรถออนไลน์', 
    projnameeng: 'WASH ME NOW' , 
    id1: '6009650240', 
    member1firstname: 'คุนัญญา' , 
    member1lastname: 'เดชบริพันธ์' ,
    semester1: 'S',
    id2: '6009650331', 
    member2firstname: 'ณัทชวัช' ,
    member2lastname: 'อาวุธโสภา' ,
    semester2: 'S',
    advisor: 'Songsak Rongviriyapanich',
  },
  { id: 4, 
    projnamethai: 'การวิเคราะห์แบบสอบถามด้วยเทคโนโลยีการวิเคราะห์ภาพ', 
    projnameeng: 'QUESTIONNAIR ANALYSIS USING IMAGE ANALYSIS' , 
    id1: '6009680023', 
    member1firstname: 'สุภาวดี' , 
    member1lastname: 'ใจกระสันต์' ,
    semester1: 'R',
    id2: '6009680064', 
    member2firstname: 'นัทธ์หทัย' ,
    member2lastname: 'กันทพงษ์' ,
    semester2: 'R',
    advisor: 'Saowaluk Watanapa',
  },
  { id: 5, 
    projnamethai: 'ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2', 
    projnameeng: 'ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2' , 
    id1: '6009610426', 
    member1firstname: 'ภูริช' , 
    member1lastname: 'อภิชลติ' ,
    semester1: 'R',
    id2: '6009650075', 
    member2firstname: 'สุพิชชา' ,
    member2lastname: 'รัตนไตรมาส' ,
    semester2: 'S',
    advisor: 'Nutchakorn Ngamsaowaros',
},
{ id: 6, 
  projnamethai: 'สต็อกสินค้ารองเท้า', 
  projnameeng: 'STOCK SHOES' , 
  id1: '6009650125', 
  member1firstname: 'โชติกา' , 
  member1lastname: 'โพธิปัญญา' ,
  semester1: 'S',
  id2: '6009650117', 
  member2firstname: 'วิทัศน์' ,
  member2lastname: 'จันอุไรรัตน์' ,
  semester2: 'S',
  advisor: 'Nutchakorn Ngamsaowaros',
},
{ id: 7, 
  projnamethai: 'ระบบจองบริการล้างรถออนไลน์', 
  projnameeng: 'WASH ME NOW' , 
  id1: '6009650240', 
  member1firstname: 'คุนัญญา' , 
  member1lastname: 'เดชบริพันธ์' ,
  semester1: 'S',
  id2: '6009650331', 
  member2firstname: 'ณัทชวัช' ,
  member2lastname: 'อาวุธโสภา' ,
  semester2: 'S',
  advisor: 'Songsak Rongviriyapanich',
},
{ id: 8, 
  projnamethai: 'การวิเคราะห์แบบสอบถามด้วยเทคโนโลยีการวิเคราะห์ภาพ', 
  projnameeng: 'QUESTIONNAIR ANALYSIS USING IMAGE ANALYSIS' , 
  id1: '6009680023', 
  member1firstname: 'สุภาวดี' , 
  member1lastname: 'ใจกระสันต์' ,
  semester1: 'R',
  id2: '6009680064', 
  member2firstname: 'นัทธ์หทัย' ,
  member2lastname: 'กันทพงษ์' ,
  semester2: 'R',
  advisor: 'Saowaluk Watanapa',
},
{ id: 9, 
      projnamethai: 'ระบบบริหารจัดการโครงงานพิเศษ 1 และ โครงงานพิเศษ 2', 
      projnameeng: 'ADMINISTRATIVE SYSTEM FOR SPECIAL PROJECT 1 AND SPECIAL PROJECT 2' , 
      id1: '6009610426', 
      member1firstname: 'ภูริช' , 
      member1lastname: 'อภิชลติ' ,
      semester1: 'R',
      id2: '6009650075', 
      member2firstname: 'สุพิชชา' ,
      member2lastname: 'รัตนไตรมาส' ,
      semester2: 'S',
      advisor: 'Nutchakorn Ngamsaowaros',
  },
  { id: 10, 
    projnamethai: 'สต็อกสินค้ารองเท้า', 
    projnameeng: 'STOCK SHOES' , 
    id1: '6009650125', 
    member1firstname: 'โชติกา' , 
    member1lastname: 'โพธิปัญญา' ,
    semester1: 'S',
    id2: '6009650117', 
    member2firstname: 'วิทัศน์' ,
    member2lastname: 'จันอุไรรัตน์' ,
    semester2: 'S',
    advisor: 'Nutchakorn Ngamsaowaros',
  },
  { id: 11, 
    projnamethai: 'ระบบจองบริการล้างรถออนไลน์', 
    projnameeng: 'WASH ME NOW' , 
    id1: '6009650240', 
    member1firstname: 'คุนัญญา' , 
    member1lastname: 'เดชบริพันธ์' ,
    semester1: 'S',
    id2: '6009650331', 
    member2firstname: 'ณัทชวัช' ,
    member2lastname: 'อาวุธโสภา' ,
    semester2: 'S',
    advisor: 'Songsak Rongviriyapanich',
  },
  { id: 12, 
    projnamethai: 'การวิเคราะห์แบบสอบถามด้วยเทคโนโลยีการวิเคราะห์ภาพ', 
    projnameeng: 'QUESTIONNAIR ANALYSIS USING IMAGE ANALYSIS' , 
    id1: '6009680023', 
    member1firstname: 'สุภาวดี' , 
    member1lastname: 'ใจกระสันต์' ,
    semester1: 'R',
    id2: '6009680064', 
    member2firstname: 'นัทธ์หทัย' ,
    member2lastname: 'กันทพงษ์' ,
    semester2: 'R',
    advisor: 'Saowaluk Watanapa',
  },
  
];


export const BlockProjectList_Advisor = () => {

    const classes = useStyles();
    return (
        <div className="rightblockCSproject">
            <div className="blockwhiteCSproject">
            <h1 className="TopnameCSproject">CS Project </h1>
                <hr className="hr-csproject"></hr>

                <div style={{ height: 570, width: 1150 , marginTop: 20 , marginLeft: 48}}>
                    <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
                </div>

                <Button
                  id="btn-create"
                  className= "buttonttt"
                  // onClick={addProject}
                  variant="outlined"
                  color="primary"
                  type="submit"
                  endIcon={<Icon>add</Icon>}
                  >Submit
              </Button>
            </div>
        </div>
    )
}
