#!/bin/sh

FONT=terminus-font/TerminusTTF-4.46.0.ttf

generate_font ()
{
    POINT=$1
    CHARS=$2
    CROP=$3

    mkdir -p bitmaps
    FILENAME=bitmaps/Terminus_${POINT}.png

    # An odd format, but this allows us to use the Espruino image converter (output as Image Object) for the font data.
    convert -font ${FONT} -background black -fill white -pointsize ${POINT} -kerning 1 label:"${CHARS}" $CROP -flip -rotate 90 ${FILENAME}
}

generate_digits ()
{
    POINT=$1
    CHARS=$2
    CROP=$3

    mkdir -p bitmaps
    DIGITS_FILENAME="bitmaps/digits.png"
    OUTLINE_FILENAME="bitmaps/outline.png"
    OUTLINE_BASE_FILENAME="bitmaps/outline_base.png"

    convert -font ${FONT} -background black -fill white -pointsize ${POINT} -kerning 1 label:"${CHARS}" -filter point -resize 400% $CROP -flip -rotate 90 ${DIGITS_FILENAME}

    # Composition:
    # Union of with 1px offset in each up, down, left, right
    # difference with original

    convert -font ${FONT} -background transparent -fill white -pointsize ${POINT} -kerning 1 label:"${CHARS}" -filter point -resize 400% $CROP -flip -rotate 90 ${OUTLINE_FILENAME}

    cp ${OUTLINE_FILENAME} ${OUTLINE_BASE_FILENAME}

    convert -gravity center ${OUTLINE_FILENAME} ${OUTLINE_BASE_FILENAME} -geometry +1+0 -composite ${OUTLINE_FILENAME}
    convert -gravity center ${OUTLINE_FILENAME} ${OUTLINE_BASE_FILENAME} -geometry -1+0 -composite ${OUTLINE_FILENAME}
    convert -gravity center ${OUTLINE_FILENAME} ${OUTLINE_BASE_FILENAME} -geometry +0+1 -composite ${OUTLINE_FILENAME}
    convert -gravity center ${OUTLINE_FILENAME} ${OUTLINE_BASE_FILENAME} -geometry +0-1 -composite ${OUTLINE_FILENAME}
    convert ${OUTLINE_FILENAME} ${OUTLINE_BASE_FILENAME} -compose Xor -composite -background black -alpha remove -alpha off ${OUTLINE_FILENAME}

    rm ${OUTLINE_BASE_FILENAME}
}

# Unused characters are left blank to improve compression
generate_font 14 "0123456789%" "-crop 88x10+0+2"
generate_font 18 "\\            ,-  0123456789       A CD F   J  MNOP  ST  W         abcde ghi kl nop r tuv  y »♥" "-crop 930x15+0+3"
generate_digits 14 "0123456789:" "-crop 352x42+0+7"



