import React, { Component } from 'react'
import { Calendar } from 'react-native-calendars'
import { View, Text, StyleSheet } from 'react-native'

class ScreenOne extends Component {
    state={
        id:[],
        sDate:{}
    }

    selectedDate = date =>{
        
            console.log(this.state)
        this.setState( prevState =>{
                //adding
            let actionThis = null
            //removing
                const mervz = this.state.id.filter(val=>{
                    return val !== date
                })
                if(this.state.id.length === mervz.length){
                    
                        prevState.id =[...prevState.id, date ],
                            prevState.sDate={
                                ...prevState.sDate,
                                [date]:{selected: true, marked: true, selectedColor: 'blue'}
                            }
                            
                    
                }
                else{
                    mervz = prevState.id
                    // prevState.id =[mervz],
                    delete prevState.sDate[date]
                            
                }
            return{
                ...prevState,
                id: mervz 
                
            }
            
            
            
        })
    }
    
    render() {
        // let renz = this.state.sDate.map((val, index) => val[index])

        console.log('MGA BOOB')
        console.log(this.state.sDate)
        const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};
        return (
            <View style={styles.container}>
                <View style={styles.upper}>
                <Calendar
  // Initially visible month. Default = Date()
  current={'2012-05-01'}
  // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
  minDate={'2012-05-10'}
  // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
  maxDate={'2012-05-30'}
  // Handler which gets executed on day press. Default = undefined
  onDayPress={(day) => { this.selectedDate(day.dateString)}}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={(day) => {console.log('selected day', day)}}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={(month) => {console.log('month changed', month)}}
  // Hide month navigation arrows. Default = false
//   hideArrows={true}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  renderArrow={(direction) => (<Text>{direction}</Text>)}
  // Do not show days of other months in month page. Default = false
  hideExtraDays={true}
  // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={true}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
//   onPressArrowLeft={substractMonth => substractMonth()}
  // Handler which gets executed when press arrow icon left. It receive a callback can go next month
//   onPressArrowRight={addMonth => addMonth()}
markedDates={   this.state.sDate}

/>
                </View>
                <Text  numberOfLines={2} style={{fontSize:20, fontWeight:'bold'}} onPress={() => alert('sad')}>
                YOGUSTOaetrrtrretertetetertertretertetretetertert33333333333333333333333333333333333333333333333333333333333333333
                </Text>
                <View style={styles.lower}></View>
                
            </View>
        )
    }
}
export default ScreenOne;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center',
      // alignItems: 'center',
      // backgroundColor: 'white',
    },
    upper:{
      flex: 9,
      backgroundColor:'yellow'
    },
    lower:{
      flex: 1,
      backgroundColor:'red'
    }
  });