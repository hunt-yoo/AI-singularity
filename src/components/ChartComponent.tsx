import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, BarChart, Bar } from 'recharts';

export function ChartComponent({ type, data, config }: { type?: string, data?: any[], config?: any }) {
  if (type === 'line' && data) {
    return (
      <div className="w-full h-64 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis 
              scale={config?.logScale ? 'log' : 'auto'} 
              domain={['auto', 'auto']} 
              stroke="rgba(255,255,255,0.3)" 
              tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} 
              axisLine={false} 
              tickLine={false}
              tickFormatter={(val) => {
                if (val >= 1000000) return `${(val / 1000000).toFixed(0)}M`;
                if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
                return val;
              }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(10,10,15,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backdropFilter: 'blur(12px)' }}
              itemStyle={{ color: '#fff', fontWeight: 500 }}
              labelStyle={{ color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}
              cursor={{ stroke: 'rgba(255,255,255,0.1)', strokeWidth: 2 }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#a855f7" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#a855f7', strokeWidth: 0 }} 
              activeDot={{ r: 6, fill: '#fff', stroke: '#a855f7', strokeWidth: 2 }} 
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
  
  if (type === 'bar' && data) {
    return (
      <div className="w-full h-64 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
            <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} axisLine={false} tickLine={false} />
            <YAxis 
              scale={config?.logScale ? 'log' : 'auto'} 
              domain={['auto', 'auto']} 
              stroke="rgba(255,255,255,0.3)" 
              tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}} 
              axisLine={false} 
              tickLine={false}
              tickFormatter={(val) => {
                if (val >= 1000000) return `${(val / 1000000).toFixed(0)}M`;
                if (val >= 1000) return `${(val / 1000).toFixed(0)}k`;
                return val;
              }}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: 'rgba(10,10,15,0.9)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', backdropFilter: 'blur(12px)' }}
              itemStyle={{ color: '#fff', fontWeight: 500 }}
              labelStyle={{ color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}
              cursor={{fill: 'rgba(255,255,255,0.05)'}}
            />
            <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} animationDuration={1500} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'network') {
    return (
      <div className="w-full h-64 mt-6 relative flex items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-black/20 group">
        <svg className="w-full h-full absolute inset-0" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
          <g stroke="rgba(168, 85, 247, 0.3)" strokeWidth="1.5" className="transition-all duration-700 group-hover:stroke-[rgba(168,85,247,0.6)]">
            <line x1="100" y1="50" x2="200" y2="100" />
            <line x1="100" y1="150" x2="200" y2="100" />
            <line x1="200" y1="100" x2="300" y2="50" />
            <line x1="200" y1="100" x2="300" y2="150" />
            <line x1="100" y1="50" x2="300" y2="50" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite]" />
            <line x1="100" y1="150" x2="300" y2="150" strokeDasharray="4 4" className="animate-[dash_20s_linear_infinite_reverse]" />
          </g>
          <g fill="#a855f7" className="transition-all duration-500">
            <circle cx="100" cy="50" r="4" className="group-hover:r-6 group-hover:fill-purple-400" />
            <circle cx="100" cy="150" r="4" className="group-hover:r-6 group-hover:fill-purple-400" />
            <circle cx="200" cy="100" r="6" fill="#fff" className="group-hover:r-8 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
            <circle cx="300" cy="50" r="4" className="group-hover:r-6 group-hover:fill-purple-400" />
            <circle cx="300" cy="150" r="4" className="group-hover:r-6 group-hover:fill-purple-400" />
          </g>
        </svg>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent animate-pulse" />
        <style>{`
          @keyframes dash {
            to { stroke-dashoffset: -100; }
          }
        `}</style>
      </div>
    );
  }

  return null;
}
