#include <stdio.h>

int main(void)
{
    int n;
    scanf("%d", &n);

    int arr[100];
    for (int i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    int s;
    scanf("%d", &s);

    int count = 0;
    for (int i = 0; i < n; i++)
    {
        if (arr[i] == s)
            count++;
    }

    printf("%d\n", count);
    return 0;
}