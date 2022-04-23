import React from 'react';

function List1(props) {
    return (
        <div className="List1">
            <div className='page1'>
                <div className="logo">
                    <span className="sp1">Food</span>
                    <span className="sp2">delivery</span>
                </div>
                <div className="sp3"></div>
                <div className="sp4">Login</div>
                <div className="sp5">Sign in with your data that you entered during your <br /> registration.</div>
                <div className="sp6">Email</div>
                <input className="sp7" placeholder="name@example.com" />
                <div className="sp8">Password</div>
                <input type="text" className='sp9' placeholder='min. 8 characters' />
                <div className="sp10"></div>
                <div className="sp11">Keep me logged in</div>
                <div className="sp12">Login</div>
                <div className="sp13">Forgot password</div>
                <p className="sp14">Don't have an account?<span>Sign up</span> </p>
            </div>
            <div className='page2'>
                <div className="sq0">
                    <div className="sq1">Overall rating</div>
                    <div className="sq2">Leave review</div>
                    <div className="sq3">4.2</div>
                    <div className="sq4">3 votes</div>
                    <div className="sq5"></div>
                    <div className="sq6">Sort by: <span>Newest first</span></div>
                    <div className="sq7"></div>
                    <div className="sq8">Savannah Miles</div>
                    <div className="sq9">10 days ago</div>
                    <div className="sq10">Lorem ipsum dolor sit amet, adhuc nulla <br /> definiebas mei ad, ei doming aperiam <br /> delicata est.</div>
                    <div className="sq11">14</div>
                    <div className="sq12">4</div>
                    <div className="sq13"></div>
                    <div className="sq14"></div>
                    <div className="sq15">Jacob Jones</div>
                    <div className="sq16">1 days ago</div>
                    <div className="sq17">Lorem ipsum dolor sit amet, adhuc nulla definiebas mei ad, ei doming aperiam delicata est.</div>
                </div>
                <div className="sa0">
                    <div className="sa1"></div>
                    <div className="sa2">Nigiri set</div>
                    <div className="sa3">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod.</div>
                    <div className="sa4">$ 16.80</div>
                    <div className="sa5">-</div>
                    <div className="sa6">1</div>
                    <div className="sa7">+</div>
                </div>
                <div className="sd0">
                    <div className="sd1"></div>
                    <div className="sd2">Roll set</div>
                    <div className="sd3">Ea his sensibus eleifend, mollis iudicabit omittantur id mel. Et cum ignota euismod.</div>
                    <div className="sd4">$ 22.56</div>
                    <div className="sd5">+</div>
                </div>
                <div className="footer">
                    <div className="fo">Leave reviews for all meals</div>
                    <div className="fo1">Lorem ipsum dolor sit amet, magna scaevola his ei. Cum te paulo probatus <br /> molestiae, eirmod assentior eum ne, et omnis antiopam mel.</div>
                    <ul>
                        <li className='fo2'></li>
                        <li className='fo3'></li>
                        <li className='fo4'></li>
                        <li className='fo5'></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default List1;