function StatusBadge() {
  const isOnline = true 

  return (
    <div>
      <h3 style={{ color: isOnline ? "green" : "red" }}>
        {isOnline ? "🟢 On" : "🔴 Off"}
      </h3>
      <p>
        User is currently {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  )
}

export default StatusBadge