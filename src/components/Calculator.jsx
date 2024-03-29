import * as React from "react";
import styled from "styled-components";

import Panel from "./Panel";
import Display from "./Display";
import ButtonGroup from "./ButtonGroup";
import Button from "./Button";
import History from "./History";

const Container = styled.div`
  margin: 30px auto;
  text-align: center;
`;

// TODO: History 내에서 수식 표시할 때 사용
const Box = styled.div`
  display: inline-block;
  width: 270px;
  height: 65px;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 5px;
  text-align: right;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  cursor: pointer;
  h3 {
    margin: 0px;
  }
`;

const evalFunc = function(string) {
  // eslint-disable-next-line no-new-func
  let first = string.substr(0,1);
  
  if(first=="√") {
    let lapenIndex = string.lastIndexOf(")");
    let subResult = string.substr(2, lapenIndex-2);
    subResult = Math.sqrt(evalFunc(subResult));
    
    return new Function("return (" + subResult + string.substr(lapenIndex+1,string.length) + ")")();
  }
  
  return new Function("return (" + string + ")")();
};

class Calculator extends React.Component {
  // TODO: history 추가
  histcount=0;

  state = {
    displayValue: "",
    historyList:[]
  };

  onClickButton = key => {
    let { displayValue = "" } = this.state;
    displayValue = "" + displayValue;
    const lastChar = displayValue.substr(displayValue.length - 1);
    let check = 0 ;
    const operatorKeys = ["÷", "×", "-", "+"];
    const proc = {
      AC: () => {
        this.setState({ displayValue: "" });
      },
      BS: () => {
        if (displayValue.length > 0) {
          displayValue = displayValue.substr(0, displayValue.length - 1);
        }
        this.setState({ displayValue });
      },
      // TODO: 제곱근 구현
      "√": () => {
        if (lastChar !== "" && operatorKeys.includes(lastChar)) {
          displayValue = displayValue.substr(0, displayValue.length - 1);
        } 
        else if (lastChar !== "") {
          displayValue = displayValue.replace(/×/gi, "*");
          displayValue = displayValue.replace(/÷/gi, '/');
          displayValue = Math.sqrt(evalFunc(displayValue));

        }
        this.setState({ displayValue });
        
      },
      // TODO: 사칙연산 구현
      "÷": () => {
        if (lastChar !== "" && !operatorKeys.includes(lastChar)) {
          this.setState({ displayValue: displayValue + "÷" });
        }
      },
      "×": () => {

        if (lastChar !== "" && !operatorKeys.includes(lastChar)) {
          this.setState({ displayValue: displayValue + "×" });
        }
      },
      "-": () => {
        //- 구현
        if (lastChar !== "" && !operatorKeys.includes(lastChar)) {
          this.setState({ displayValue: displayValue + "-" });
        }
      },
      "+": () => {
        // + 연산 참고하여 연산 구현
        if (lastChar !== "" && !operatorKeys.includes(lastChar)) {
          this.setState({ displayValue: displayValue + "+" });
        }
      },

      "=": () => {
        if (lastChar !== "" && operatorKeys.includes(lastChar)) {
          displayValue = displayValue.substr(0, displayValue.length - 1);
        } 
        else if (lastChar !== "") {
          displayValue = displayValue.replace(/×/gi, "*");
          displayValue = displayValue.replace(/÷/gi, '/');
          displayValue = evalFunc(displayValue);

        }
        this.setState({ displayValue });
      },

      ".": () => {
        let Temp = (displayValue + ".");
        let ct = 0;
        let index = -1;
        
       //반복문 돌면서 확인 . 더 있나 있으면 count++
        do  {
            index = Temp.indexOf('.', index + 1);
            if (index != -1) { 
              ct++; 
            }
        } while (index != -1);

        if(ct > 1){
           this.setState({ displayValue: displayValue}); 
          }
        else { 
          this.setState({ displayValue: Temp});
         }
        

        
        
      },

      "0": () => {
        if (Number(displayValue) !== 0) {
          displayValue += "0";
          this.setState({ displayValue });
        }
      }
    };

    if (proc[key]) {
      proc[key]();
    } else {
      // 여긴 숫자
      this.setState({ displayValue: displayValue + key });
    }
  };

  render() {
    return (
      <Container>
        <Panel>
          <Display displayValue={this.state.displayValue} />
          <ButtonGroup onClickButton={this.onClickButton}>
            <Button size={1} color="gray">
              AC
            </Button>
            <Button size={1} color="gray">
              BS
            </Button>
            <Button size={1} color="gray">
              √
            </Button>
            <Button size={1} color="gray">
              ÷
            </Button>

            <Button size={1}>7</Button>
            <Button size={1}>8</Button>
            <Button size={1}>9</Button>
            <Button size={1} color="gray">
              ×
            </Button>

            <Button size={1}>4</Button>
            <Button size={1}>5</Button>
            <Button size={1}>6</Button>
            <Button size={1} color="gray">
              -
            </Button>

            <Button size={1}>1</Button>
            <Button size={1}>2</Button>
            <Button size={1}>3</Button>
            <Button size={1} color="gray">
              +
            </Button>

            <Button size={2}>0</Button>
            <Button size={1}>.</Button>
            <Button size={1} color="gray">
              =
            </Button>
          </ButtonGroup>
        </Panel>
        {/* TODO: History componet를 이용해 map 함수와 Box styled div를 이용해 history 표시 */}
        
      </Container>
    );
  }
}

export default Calculator;
