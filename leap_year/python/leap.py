def leap_year(year):
    year = int(year)

    if year % 4 == 0:
        if (year % 100 != 0) or (year % 100 == 0 and year % 400 == 0):
            return True
    return False
