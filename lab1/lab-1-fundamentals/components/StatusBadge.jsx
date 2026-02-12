function StatusBadge() {
    const isOnline = false; // This can be dynamic based on your application logic
    return(
        <div >
           <p>Status: {isOnline ? 'Online 💚' : 'Offline ❤️'}</p> 
        </div>
    )
     
}
    export default StatusBadge;