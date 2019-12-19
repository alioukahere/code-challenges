def reverse(text):
    # I wrote in three different way, for the two fist I used the python reversed function and the slice notation

    # using reversed function
    # return ''.join(reversed(text))

    # using the slice notation
    # return text[::-1]

    # the hard way
    i = 0;
    j = len(text) - 1
    reverse = []

    while i < len(text):
        reverse.append(str(text[j]))
        i += 1
        j -= 1

    return ''.join(reverse)
