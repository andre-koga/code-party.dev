def quick_sort(arr):
    def partition(arr, low, high):
        pivot = arr[high]
        i = low - 1
        for j in range(low, high):
            if arr[j] < pivot:
                i += 1
                arr[i], arr[j] = arr[j], arr[i]
        arr[i+1], arr[high] = arr[high], arr[i+1]
        return i+1

    def quick_sort_rec(arr, low, high):
        if low < high:
            pi = partition(arr, low, high)
            quick_sort_rec(arr, low, pi-1)
            quick_sort_rec(arr, pi+1, high)

    quick_sort_rec(arr, 0, len(arr)-1)
    return arr