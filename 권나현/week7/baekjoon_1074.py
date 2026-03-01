import sys
input = sys.stdin.readline

n, r, c = map(int, input().split())

def solve(n, r, c):
    if n == 0:
        return 0
    
    half = 2 ** (n-1)
    area = half * half
    
    #제1사분면
    if r < half and c < half:
        return solve(n-1, r, c)
    #제2사분면
    elif r < half and c >= half:
        return area + solve(n-1, r, c-half)
    #제3사분면
    elif r >= half and c < half:
        return 2*area + solve(n-1, r-half, c)
    #제4사분면
    else:
        return 3*area + solve(n-1, r-half, c-half)

result = solve(n, r, c)
print(result)