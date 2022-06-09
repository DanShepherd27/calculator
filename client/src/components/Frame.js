import React from 'react';
import Button from './Button';
import Display from './Display';
import './Frame.css';

function Frame() {
    return (
        <div className='calculator-frame'>
            <div className='outline'>
                <table>
                    <tbody>
                        <tr className='first-row'>
                            <td colSpan="3"><Display/></td>
                            <td><Button text='⌫' onclick={() => 
                                {
                                    let content = [...document.getElementById('calculator-frame__display').innerHTML];
                                    content.pop();
                                    if (content.length === 0) {content.push('0')};
                                    console.log(content);
                                    document.getElementById('calculator-frame__display').innerHTML = content.join('');
                                }}/>
                            </td>
                        </tr>
                        <tr>
                            <td><Button text='7'/></td>
                            <td><Button text='8'/></td>
                            <td><Button text='9'/></td>
                            <td><Button text='÷'/></td>
                        </tr>
                        <tr>
                            <td><Button text='4'/></td>
                            <td><Button text='5'/></td>
                            <td><Button text='6'/></td>
                            <td><Button text='×'/></td>
                        </tr>
                        <tr>
                            <td><Button text='1'/></td>
                            <td><Button text='2'/></td>
                            <td><Button text='3'/></td>
                            <td><Button text='-'/></td>
                        </tr>
                        <tr>
                            <td><Button text='+/-'/></td>
                            <td><Button text='0'/></td>
                            <td><Button text='.'/></td>
                            <td><Button text='+'/></td>
                        </tr>
                        <tr>
                            <td><Button text='M+'/></td>
                            <td><Button text='M'/></td>
                            <td><Button text='C'/></td>
                            <td><Button text='='/></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Frame