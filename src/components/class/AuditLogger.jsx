import React, { Component } from 'react';

class AuditLogger extends Component {
  constructor(props) {
    super(props);
    this.state = { localLogs: [] };
  }

  componentDidMount() {
    const saved = localStorage.getItem('auditLogs');
    if (saved) this.setState({ localLogs: JSON.parse(saved) });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.logs.length !== this.props.logs.length) {
      const latest = this.props.logs[this.props.logs.length - 1];
      const updated = [...this.state.localLogs, latest];
      this.setState({ localLogs: updated });
      localStorage.setItem('auditLogs', JSON.stringify(updated));
    }
  }

  render() {
    return (
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', marginTop: '15px', backgroundColor: '#f9f9f9', color: 'black' }}>
        <h5 style={{ margin: '0 0 10px 0' }}>📋 Operations Audit Log Feed</h5>
        <div style={{ height: '120px', overflowY: 'auto', background: '#fff', border: '1px solid #eee', padding: '8px', borderRadius: '4px', fontFamily: 'monospace', fontSize: '12px' }}>
          {this.state.localLogs.map((log, i) => (
            <div key={i} style={{ padding: '2px 0', borderBottom: '1px solid #f1f1f1' }}>{log}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default AuditLogger;
