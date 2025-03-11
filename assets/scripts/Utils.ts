
type Point = { x: number; y: number };
export default class Utils {

    static getClockwisePoints(points: Point[]): Point[] {
        if (points.length < 3) return points.map(p => ({...p}));
        
        // 深拷贝点集
        const pointsCopy = points.map(p => ({x: p.x, y: p.y}));
        const n = pointsCopy.length;
        
        // 计算质心
        const centroid = pointsCopy.reduce((acc, p) => {
            acc.x += p.x;
            acc.y += p.y;
            return acc;
        }, {x: 0, y: 0});
        centroid.x /= n;
        centroid.y /= n;

        // 按极角顺时针排序并处理共线点
        const sorted = pointsCopy.sort((a, b) => {
            // 计算极角
            const angleA = Math.atan2(a.y - centroid.y, a.x - centroid.x);
            const angleB = Math.atan2(b.y - centroid.y, b.x - centroid.x);
            
            // 主排序：按顺时针方向（角度从大到小）
            if (angleA !== angleB) return angleB - angleA;
            
            // 处理共线点：使用叉积确定顺序
            const cross = (a.x - centroid.x) * (b.y - centroid.y) 
                        - (a.y - centroid.y) * (b.x - centroid.x);
            if (cross !== 0) return cross > 0 ? -1 : 1;
            
            // 相同方向按距离排序
            const distA = (a.x - centroid.x)**2 + (a.y - centroid.y)**2;
            const distB = (b.x - centroid.x)**2 + (b.y - centroid.y)**2;
            return distB - distA;
        });

        // 创建闭合多边形（添加首点作为终点）
        const result = sorted.map(p => ({...p}));
        const first = result[0];
        const last = result[result.length-1];
        if (first.x !== last.x || first.y !== last.y) {
            result.push({...first});
        }

        return result;
    }
}
