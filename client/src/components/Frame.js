import React from 'react';
import Button from './Button';
import Display from './Display';
import './Frame.css';

function Frame() {
    return (
        <div className='calculator-frame'>
            <table>
                <tr>
                    <td colspan="3"><Display/></td>
                    <td><Button text='⌫'/></td>
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
            </table>
        </div>
    )
}

export default Frame