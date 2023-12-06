import React,{ useState,useEffect, useContext} from 'react';
import { DataPrint } from '../../context/Context';
import {Page, Text, View, Document,StyleSheet,PDFViewer} from '@react-pdf/renderer'
import moment from 'moment';
import Moneda from '../../utils/Moneda';


function ReportPdf() {
    const { setImprimir, datosInforme, fechaFinal,fechaInicio,totalPayment,}= useContext(DataPrint);
    const titleHeader=["Employee","Project","#payment","Date","Work Type","Hours worked","Extra worked","Amount"];
    
    const styles=StyleSheet.create({
        page:{
            padding:10
        },
        table: {
            width: '100%',
            borderWidth: 0.5,
            display: 'flex',
            flexDirection: 'column',
            marginVertical: 12
        },
        tableRow:{
            display: 'flex',
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderBottomColor:"gray",
            paddingBottom: 5,
            paddingTop: 5
        },
        cell: {
           padding:5,
           marging: 5,
            borderWidth: 0.5,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap'
        },
        
        cells: {
           padding:5,
           marging: 5,
         
            fontSize:13,
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            textAlign: 'center',
            flexWrap: 'wrap'
        },
        header: {
           padding:5,
           marging: 5,
        fontSize:14,
            display: 'flex',
            flexWrap: 'wrap',
            color:"gray",
        },
        cellHeader:{
            flex: 1,
            alignSelf: 'stretch',
            padding:2, 
            fontSize:13, 
            color:'red',
            textAlign: 'center',  
        },
        bodyCell:{
            flex: 1, 
            alignSelf: 'stretch', 
            fontSize:12,
            textAlign: 'center',
        },
        labelHeader:{
            flex: 1,
            margin: 5,
            padding:2, 
            fontSize:13, 
          
          
        },
        titleOfHeader:{
            flex: 1,
            margin: 5,
            padding:2, 
            fontSize:13, 
          textAlign:"center"
          
        },

    })

  return (
    <>
     <div className='div-header'>
<div className='d-flex'>
      <span className='iconback' onClick={()=>setImprimir(false)} > <i className="bi bi-arrow-left-square-fill  ms-3 btn-back"> Back</i></span>
       </div>
    </div>

    <div className='div-body'>  
     <PDFViewer  style={{width:'100%',height:"90vh"}}>
        <Document >
            <Page size={"LETTER"} style={styles.page}>
                <View style={styles.header}>
                    <Text style={styles.titleOfHeader}>{`SEI GROUP`}</Text>
                    <Text style={styles.titleOfHeader}>{`Report of  payments `}</Text>
                    <Text style={styles.labelHeader}>{`Initial Date: ${fechaInicio !=="" ? moment(fechaInicio).format("MM/DD/YYYY"): ""}`}</Text>
                    <Text style={styles.labelHeader}>{`final Date: ${fechaFinal!=="" ? moment(fechaFinal).format("MM/DD/YYYY"):""}`}</Text>
                    <Text style={styles.labelHeader}>{`Full Payment: ${Moneda(totalPayment)}`}</Text>
                </View>
                <View style={styles.tableRow}>
                    { titleHeader.map((item,index)=>(
                        <Text key={index} style={styles.cellHeader}> {item}</Text>
                    ))}
                </View>    
                    {
                        datosInforme.length >0 
                        ?
                        datosInforme.map((item,index)=>(
                            <View key={index} style={styles.tableRow}>
                           
                                <Text style={styles.bodyCell}>{item.empleado}</Text>
                                <Text style={styles.bodyCell}>{item.proyecto}</Text>   
                                <Text style={styles.bodyCell}>{item.idpago}</Text>
                                <Text style={styles.bodyCell}>{moment(item.fecha).format("MM-DD-YYYY")}</Text>
                                <Text style={styles.bodyCell}>{item.tipo}</Text>
                                <Text style={styles.bodyCell}>{item.cant_hora+" hrs" }</Text>
                                <Text style={styles.bodyCell}>{item.cant_extra+" hrs" }</Text>
                                <Text style={styles.bodyCell}>{Moneda(item.subtotal) }</Text>
                            </View>
                        ))
                        :
                        null
                    }
             
            </Page>
        </Document>        
    </PDFViewer>
    </div>
      
    </>
 
  )
}

export default ReportPdf
