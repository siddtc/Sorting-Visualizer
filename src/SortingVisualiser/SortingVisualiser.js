import React, { Component } from "react";
import "./module.SortingVisualiser.css";
import * as sortedArray from './sortingAlgorithms'
export default class SortingVisualiser extends Component {
  state = {
    array: [],
  };
  componentDidMount() {
    this.resetArray();
  }
  resetArray = () => {
    const array = [];
    for (var i = 0; i < 20; i++) {
      array.push(getRandomArbitrary(20, 650));
    }
    this.setState({ array });
    const bars=document.getElementsByClassName('arr-bar');
    for(let i=0;i<bars.length;i++)
    bars[i].style.backgroundColor='aquamarine';
  };
  disableButtons=()=>
  {
    const but=document.getElementsByTagName('button');
    for(let i=0;i<but.length;i++)
    {
      but[i].disabled = 'true';
    }
  }
  enableButtons=()=>
  {
    console.log("iside enable")
    const but=document.getElementsByTagName('button');
    console.log(but)
    for(let i=0;i<but.length;i++)
    {
      but[i].disabled = 0;
    }
  }
  mergeSort=()=>{
    this.disableButtons();
      const [animations,sortedA] = sortedArray.getMergeSortAnimations(this.state.array);
      console.log(animations);
        var c=0;
        const bars=document.getElementsByClassName('arr-bar');
        for(let i=0;i<animations.length;i++)
        {
          setTimeout(() => {
            setTimeout(() => {
              for(let k=s;k<=e;k++)
               bars[k].style.backgroundColor='red';
            }, c);
            const {s,e,animation} = animations[i];
            for(let j=0;j<animation.length;j++)
            {
              if(animation[j][0]==='comparison1')
              {
                setTimeout(() => {
                  const [comp,fi,si] = animation[j];
                  const bo=bars[fi];
                  const bt=bars[si];
                  bo.style.backgroundColor='orange';
                  bt.style.backgroundColor='orange';
                }, c+j*50);
                
              }
              else if(animation[j][0]==='nheight')
              {
                setTimeout(() => {
                  const [nh,i,h]=animation[j];
                  bars[i].style.height=`${h}px`;
                  bars[i].style.backgroundColor='green';
                }, c+j*50);
              }
              else
              {
                setTimeout(() => {
                  for(let k=s;k<=e;k++)
                   bars[k].style.backgroundColor='aquamarine';
                }, c+j*50);
              }
            }
            c+=animation.length*50;
          },c);
        }
       
        setTimeout(
          this.enableButtons
        ,10000);
      }
  
  quickSort=()=>{
    this.disableButtons();
      const [animations,sortedA] = sortedArray.getQuickSortAnimations(this.state.array);
      console.log(sortedA);
        const bars=document.getElementsByClassName('arr-bar');
      for(let i=0;i<animations.length;i++)
      {
        if(animations[i][0]==='p1')
        {
          let pi=animations[i][1];
          setTimeout(()=>{
            bars[pi].style.backgroundColor='purple';
          },i*50)
        }
        else if(animations[i][0]==='comp1')
        {
          let pi=animations[i][1];
          setTimeout(()=>{
            bars[pi].style.backgroundColor='purple';
          },i*50)
        }
        else if(animations[i][0]==='comp2')
        {
          let pi=animations[i][1];
          setTimeout(()=>{
            bars[pi].style.backgroundColor='aquamarine';
          },i*50)
        }
        else if(animations[i][0]==='swap1')
        {
          let [n,fi,si]=animations[i];
          setTimeout(()=>{
            bars[fi].style.backgroundColor='red';
            bars[si].style.backgroundColor='blue';
          },i*50)
        }
        else if(animations[i][0]==='swap2')
        {
          let [n,fi,si,h1,h2]=animations[i];
          setTimeout(()=>{
            bars[fi].style.height=`${h2}px`;
            bars[si].style.height=`${h1}px`;
            bars[fi].style.backgroundColor='blue';
            bars[si].style.backgroundColor='red';
          },i*50)
        }
        else if(animations[i][0]==='swap3')
        {
          let [n,fi,si]=animations[i];
          setTimeout(()=>{
            bars[fi].style.backgroundColor='aquamrine';
            bars[si].style.backgroundColor='aquamarine';
          },i*50)
        }
        else if(animations[i][0]==='p2')
        {
          let [n,fi,si,h1,h2]=animations[i];
          setTimeout(()=>{
            bars[fi].style.height=`${h2}px`;
            bars[si].style.height=`${h1}px`;
            bars[fi].style.backgroundColor='green';
          },i*50)
        }
      }
      setTimeout(this.enableButtons,animations.length*50+1000);
  }
  insertionSort=()=>{
    this.disableButtons();
    const [animations,sortedA] = sortedArray.getInsertionSortAnimations(this.state.array);
    console.log(sortedA);
      const bars=document.getElementsByClassName('arr-bar');
      for(let i=0;i<animations.length;i++)
      {
        if(animations[i][0]==='comp1')
        {
          let [n,fi]=animations[i];
          setTimeout(()=>{
            bars[fi].style.backgroundColor='blue';
            bars[fi-1].style.backgroundColor='blue';
          },i*50)
        }
        else if(animations[i][0]==='swap1')
        {
          let [n,fi]=animations[i];
          
          setTimeout(()=>{
            bars[fi].style.backgroundColor='red';
            bars[fi-1].style.backgroundColor='red';
          },i*50)
        }
        else if(animations[i][0]==='swap2')
        {
          let [n,fi,h1,h2]=animations[i];
          setTimeout(()=>{
            bars[fi].style.height=`${h2}px`;
            bars[fi-1].style.height=`${h1}px`;
          },i*50)
        }
        else if(animations[i][0]==='swap3')
        {
          let [n,fi]=animations[i];
          setTimeout(()=>{
            bars[fi].style.backgroundColor='aquamarine';
            bars[fi-1].style.backgroundColor='aquamarine';
          },i*50)
        }
        else if(animations[i][0]==='comp2')
        {
          let [n,fi]=animations[i];
          setTimeout(()=>{
            bars[fi].style.backgroundColor='aquamarine';
            bars[fi-1].style.backgroundColor='aquamarine';
          },i*50)
        }
      }
      setTimeout(this.enableButtons,animations.length*50+1000);

  }
  selectionSort=()=>{

  }
  bubbleSort=()=>{
    this.disableButtons();
      const [animations,sortedA] = sortedArray.getBubbleSortAnimations(this.state.array);
      console.log(sortedA);
        const bars=document.getElementsByClassName('arr-bar');
        for(let i=0;i<animations.length;i++)
        {
          if(animations[i][0]==='comp1')
          {
            let [n,fi]=animations[i];
            
            setTimeout(()=>{
              bars[fi].style.backgroundColor='blue';
              bars[fi+1].style.backgroundColor='blue';
            },i*50)
          }
          else if(animations[i][0]==='swap1')
          {
            let [n,fi]=animations[i];
            
            setTimeout(()=>{
              bars[fi].style.backgroundColor='red';
              bars[fi+1].style.backgroundColor='red';
            },i*50)
          }
          else if(animations[i][0]==='swap2')
          {
            let [n,fi,h1,h2]=animations[i];
            setTimeout(()=>{
              bars[fi].style.height=`${h2}px`;
              bars[fi+1].style.height=`${h1}px`;
            },i*50)
          }
          else if(animations[i][0]==='swap3')
          {
            let [n,fi]=animations[i];
            setTimeout(()=>{
              bars[fi].style.backgroundColor='aquamarine';
              bars[fi+1].style.backgroundColor='aquamarine';
            },i*50)
          }
          else if(animations[i][0]==='comp2')
          {
            let [n,fi]=animations[i];
            setTimeout(()=>{
              bars[fi].style.backgroundColor='aquamarine';
              bars[fi+1].style.backgroundColor='aquamarine';
            },i*50)
          }
          else if(animations[i][0]==='last')
          {
            let [n,fi]=animations[i];
            setTimeout(()=>{
              bars[fi].style.backgroundColor='green';
            },i*50)
          }
        }
        setTimeout(this.enableButtons,animations.length*50+1000);

}
  render() {
    return (
      <div className="main">
        <div>
        <button onClick={this.resetArray}>Generate New Array</button>
        <button onClick={this.mergeSort}>Merge Sort</button>
        <button onClick={this.quickSort}>Quick Sort</button>
        <button onClick={this.insertionSort}>Insertion Sort</button>
        <button onClick={this.selectionSort}>Selection Sort</button>
        <button onClick={this.bubbleSort}>Bubble Sort</button>
         
        </div>
        <div className="array-container">
          {this.state.array.map((value, idx) => {
            return (
              <div
                className="arr-bar"
                key={idx}
                style={{ height: `${value}px` }}
              ></div>
            );
          })}
        </div>
      </div>
    );
  }
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function arraysAreEqual(arr1,arr2){
    if(arr1.length!==arr2.length)
    return 0;
    for(var i=0;i<arr1.length;i++)
    {
        if(arr1[i]!==arr2[i])
        return 0;
    }
    return 1;
}