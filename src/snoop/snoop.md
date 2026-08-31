<script type="py-editor" config='{"packages": ["snoop"]}'>
import snoop

@snoop
def count_to_four_and_say_goodbye():
    x = 1
    while x < 5:
        print(x)
        x = x + 1
    print('Goodbye')

count_to_four_and_say_goodbye()
</script>