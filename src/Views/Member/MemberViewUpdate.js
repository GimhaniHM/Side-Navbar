const MemberViewUpdate = () => {
    return ( 
        <div >
            <h1 color="#000">
            Member View And Update It looks like there's a mistake in the SideNavbar component's rendering logic. Specifically, the link property is not defined for each item in the NavsArray array.
To fix this, you should change link to path in the NavsArray of MenuItems. For example, change:
            </h1>
        </div>
     );
}
 
export default MemberViewUpdate;