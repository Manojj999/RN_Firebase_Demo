import * as React from 'react';
import Svg, {G, Path, Mask, Defs, Circle, ClipPath} from 'react-native-svg';

function AppLogoLarge(props) {
  return (
    <Svg
      width={197}
      height={136}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M128.167 68.88c-11.63 9.493-47.942 9.493-59.334 0-11.63-9.494-10.442-50.078 0-60.758 10.443-10.68 48.891-10.68 59.334 0 10.442 10.68 11.629 51.264 0 60.758z"
          fill="#E72626"
        />
        <Path
          d="M98.737 52.267c-10.442 8.307-22.072 12.579-32.989 12.816-8.07-13.765-6.408-47.23 3.085-56.96 8.544-8.781 35.363-10.442 50.79-4.984 3.797 15.664-4.035 35.6-20.886 49.128z"
          fill="#ED2B44"
        />
        <Path
          d="M103.276 26.188c.365-.659.887-.988 1.568-.988h6.672c.267 0 .498.098.692.293a.949.949 0 01.292.695v23.625c0 .268-.097.5-.292.695a.943.943 0 01-.692.292h-6.599a.944.944 0 01-.693-.292.953.953 0 01-.292-.695V38.476l-2.661 5.266c-.073.17-.243.366-.511.585-.267.22-.607.33-1.02.33h-2.48c-.413 0-.753-.11-1.02-.33-.268-.22-.438-.414-.51-.585l-2.662-5.266v11.337a.95.95 0 01-.292.695.945.945 0 01-.693.292h-6.599a.945.945 0 01-.692-.292.95.95 0 01-.292-.695V26.188c0-.269.097-.5.292-.695a.945.945 0 01.692-.293h6.672c.68 0 1.203.33 1.568.988l4.776 8.777 4.776-8.777z"
          fill="#fff"
        />
      </G>
      <Path
        d="M2.6 124V95.6h5.6l8.96 16.4 9-16.4h5.4V124H25.8v-17.96l-6.6 12.04h-4.24l-6.6-12.04V124H2.6zm43.94.6c-1.573 0-3.026-.28-4.36-.84a10.751 10.751 0 01-3.48-2.32 11.107 11.107 0 01-2.32-3.56c-.533-1.36-.8-2.84-.8-4.44 0-1.6.28-3.067.84-4.4a11.107 11.107 0 012.32-3.56 10.902 10.902 0 013.52-2.36c1.36-.56 2.84-.84 4.44-.84 1.574 0 3.027.28 4.36.84a10.454 10.454 0 013.48 2.36c.987.987 1.747 2.16 2.28 3.52.56 1.333.84 2.8.84 4.4 0 1.6-.28 3.08-.84 4.44a10.782 10.782 0 01-2.36 3.56 10.356 10.356 0 01-3.52 2.36c-1.333.56-2.8.84-4.4.84zm.08-5.04c1.014 0 1.92-.267 2.72-.8.8-.533 1.427-1.253 1.88-2.16.48-.933.72-1.987.72-3.16s-.24-2.213-.72-3.12c-.453-.933-1.08-1.667-1.88-2.2-.8-.533-1.706-.8-2.72-.8-1.013 0-1.92.267-2.72.8-.8.533-1.44 1.267-1.92 2.2-.453.907-.68 1.947-.68 3.12s.227 2.227.68 3.16c.48.907 1.12 1.627 1.92 2.16.8.533 1.707.8 2.72.8zM61.343 124v-21.12h5.16l.16 2.72a6.615 6.615 0 012.52-2.4c1.093-.613 2.333-.92 3.72-.92 1.546 0 2.893.373 4.04 1.12 1.173.72 2.08 1.76 2.72 3.12.64 1.36.96 2.96.96 4.8V124h-5.6v-11.96c0-1.467-.334-2.613-1-3.44-.667-.853-1.587-1.28-2.76-1.28-.854 0-1.6.2-2.24.6a4 4 0 00-1.52 1.6c-.374.693-.56 1.48-.56 2.36V124h-5.6zm33.91.6c-1.574 0-3.027-.28-4.36-.84a10.749 10.749 0 01-3.48-2.32 11.106 11.106 0 01-2.32-3.56c-.534-1.36-.8-2.84-.8-4.44 0-1.6.28-3.067.84-4.4a11.106 11.106 0 012.32-3.56 10.9 10.9 0 013.52-2.36c1.36-.56 2.84-.84 4.44-.84 1.573 0 3.026.28 4.36.84a10.46 10.46 0 013.48 2.36c.986.987 1.746 2.16 2.28 3.52.56 1.333.84 2.8.84 4.4 0 1.6-.28 3.08-.84 4.44a10.788 10.788 0 01-2.36 3.56 10.358 10.358 0 01-3.52 2.36c-1.334.56-2.8.84-4.4.84zm.08-5.04c1.013 0 1.92-.267 2.72-.8.8-.533 1.426-1.253 1.88-2.16.48-.933.72-1.987.72-3.16s-.24-2.213-.72-3.12c-.454-.933-1.08-1.667-1.88-2.2-.8-.533-1.707-.8-2.72-.8-1.014 0-1.92.267-2.72.8-.8.533-1.44 1.267-1.92 2.2-.454.907-.68 1.947-.68 3.12s.226 2.227.68 3.16c.48.907 1.12 1.627 1.92 2.16.8.533 1.706.8 2.72.8zm14.721 4.44v-21.12h5.16l.16 2.72a6.61 6.61 0 012.52-2.4c1.093-.613 2.333-.92 3.72-.92 1.546 0 2.893.373 4.04 1.12 1.173.72 2.08 1.76 2.719 3.12.641 1.36.961 2.96.961 4.8V124h-5.6v-11.96c0-1.467-.334-2.613-1-3.44-.667-.853-1.587-1.28-2.76-1.28-.854 0-1.6.2-2.24.6a3.998 3.998 0 00-1.52 1.6c-.374.693-.56 1.48-.56 2.36V124h-5.6zm32.324.6c-1.467 0-2.734-.28-3.8-.84-1.04-.587-1.854-1.427-2.44-2.52-.56-1.093-.84-2.427-.84-4v-9.84h-3.6v-4.52h3.6v-7.2h5.6v7.2h5.76v4.52h-5.76v9.16c0 1.013.213 1.8.64 2.36.426.533 1.08.8 1.96.8.453 0 .933-.067 1.44-.2a9.281 9.281 0 001.52-.52l1 4.2a9.106 9.106 0 01-2.32 1c-.854.267-1.774.4-2.76.4zm18.148 0c-1.573 0-3.027-.28-4.36-.84a10.757 10.757 0 01-3.48-2.32 11.1 11.1 0 01-2.32-3.56c-.533-1.36-.8-2.84-.8-4.44 0-1.6.28-3.067.84-4.4a11.1 11.1 0 012.32-3.56 10.901 10.901 0 013.52-2.36c1.36-.56 2.84-.84 4.44-.84 1.573 0 3.027.28 4.36.84a10.462 10.462 0 013.48 2.36 10.15 10.15 0 012.28 3.52c.56 1.333.84 2.8.84 4.4 0 1.6-.28 3.08-.84 4.44a10.788 10.788 0 01-2.36 3.56 10.36 10.36 0 01-3.52 2.36c-1.333.56-2.8.84-4.4.84zm.08-5.04c1.013 0 1.92-.267 2.72-.8.8-.533 1.427-1.253 1.88-2.16.48-.933.72-1.987.72-3.16s-.24-2.213-.72-3.12c-.453-.933-1.08-1.667-1.88-2.2-.8-.533-1.707-.8-2.72-.8-1.013 0-1.92.267-2.72.8-.8.533-1.44 1.267-1.92 2.2-.453.907-.68 1.947-.68 3.12s.227 2.227.68 3.16c.48.907 1.12 1.627 1.92 2.16.8.533 1.707.8 2.72.8zm14.721 4.44v-21.12h5.16l.16 2.72a6.61 6.61 0 012.52-2.4c1.093-.613 2.333-.92 3.72-.92 1.547 0 2.893.373 4.04 1.12 1.173.72 2.08 1.76 2.72 3.12.64 1.36.96 2.96.96 4.8V124h-5.6v-11.96c0-1.467-.333-2.613-1-3.44-.667-.853-1.587-1.28-2.76-1.28-.853 0-1.6.2-2.24.6a3.998 3.998 0 00-1.52 1.6c-.373.693-.56 1.48-.56 2.36V124h-5.6z"
        fill="#fff"
      />
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(60.5)" d="M0 0h76v76H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
function Facebook(props) {
  return (
    <Svg
      width={45}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#3B5998" />
      <Path
        d="M24.746 33.246V23.002h3.457l.513-4.01h-3.97v-2.556c0-1.157.323-1.95 1.984-1.95h2.105V10.91a27.913 27.913 0 00-3.084-.159c-3.055 0-5.152 1.865-5.152 5.289v2.944h-3.434v4.011h3.441v10.252h4.14z"
        fill="#fff"
      />
    </Svg>
  );
}
function Google(props) {
  return (
    <Svg
      width={45}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#fff" />
      <Path
        d="M16.266 18.765A7.077 7.077 0 0123 13.909c1.69 0 3.218.6 4.418 1.582L30.91 12c-2.128-1.855-4.855-3-7.91-3-4.73 0-8.802 2.698-10.76 6.65l4.026 3.115z"
        fill="#E72626"
      />
      <Path
        d="M27.04 27.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 01-6.723-4.823l-4.04 3.067A11.964 11.964 0 0023 33c2.933 0 5.735-1.043 7.834-3l-3.793-2.987z"
        fill="#34A853"
      />
      <Path
        d="M30.834 30c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H23v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L30.834 30z"
        fill="#4A90E2"
      />
      <Path
        d="M16.277 23.268A7.122 7.122 0 0115.91 21c0-.782.125-1.533.357-2.235L12.24 15.65A11.934 11.934 0 0011 21c0 1.92.445 3.73 1.237 5.335l4.04-3.067z"
        fill="#FBBC05"
      />
    </Svg>
  );
}
function Twitter(props) {
  return (
    <Svg
      width={45}
      height={45}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={22.5} cy={22.5} r={22.5} fill="#00ACEE" />
      <Path
        d="M32.541 16.997c.017.219.017.436.017.654 0 6.656-5.067 14.326-14.325 14.326-2.853 0-5.503-.826-7.733-2.261.405.046.795.062 1.216.062a10.088 10.088 0 006.252-2.151 5.045 5.045 0 01-4.71-3.491c.312.046.625.077.952.077.451 0 .905-.062 1.326-.171A5.034 5.034 0 0111.5 19.1v-.063a5.08 5.08 0 002.275.639 5.028 5.028 0 01-2.245-4.193c0-.935.248-1.792.685-2.54a14.32 14.32 0 0010.382 5.27 5.722 5.722 0 01-.125-1.155 5.033 5.033 0 015.035-5.035c1.45 0 2.759.608 3.679 1.59a9.948 9.948 0 003.195-1.216 5.025 5.025 0 01-2.214 2.775c1-.114 1.977-.377 2.899-.78a10.807 10.807 0 01-2.524 2.604z"
        fill="#fff"
      />
    </Svg>
  );
}
function Camera(props) {
  return (
    <Svg
      width={36}
      height={36}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.504 3c-1.68 0-3.233 1.017-3.802 2.62l-.443 1.25a.45.45 0 01-.424.3H9.75C6.093 7.17 3 9.99 3 13.625v11.448c0 3.635 3.093 6.457 6.749 6.457h16.509c3.655 0 6.749-2.822 6.749-6.457V13.626c0-3.635-3.093-6.457-6.75-6.457h-.085a.45.45 0 01-.424-.3l-.444-1.25C24.736 4.018 23.182 3 21.504 3h-7zm-1.257 3.522c.16-.454.643-.823 1.257-.823h7c.613 0 1.095.37 1.256.823l.443 1.25a3.15 3.15 0 002.969 2.097h.086c2.308 0 4.05 1.752 4.05 3.757v11.448c0 2.005-1.742 3.757-4.05 3.757H9.748c-2.307 0-4.049-1.752-4.049-3.757V13.626c0-2.005 1.742-3.757 4.05-3.757h.086a3.15 3.15 0 002.968-2.097l.444-1.25zm.486 12.6a4.27 4.27 0 118.54 0 4.27 4.27 0 01-8.54 0zm4.27-6.97a6.97 6.97 0 100 13.939 6.97 6.97 0 000-13.939z"
        fill="#AAA"
      />
    </Svg>
  );
}
function SearchIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.665 2C5.869 2 2 5.927 2 10.747s3.869 8.746 8.665 8.746c4.796 0 8.664-3.926 8.664-8.746a8.79 8.79 0 00-2.534-6.181A8.624 8.624 0 0010.666 2zM4.09 10.747c0-3.687 2.954-6.657 6.575-6.657 1.74 0 3.41.699 4.645 1.946a6.699 6.699 0 011.93 4.71c0 3.688-2.955 6.657-6.575 6.657s-6.575-2.97-6.575-6.656zm15.021 6.898a1.045 1.045 0 10-1.478 1.478l2.583 2.583a1.045 1.045 0 101.478-1.478l-2.583-2.583z"
        fill="#fff"
      />
    </Svg>
  );
}
function NotificationIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.084 14.424h0v.013c0 .955-.69 1.587-1.383 1.743l-.06.013-.057.021h0-.001l-.012.005a7.426 7.426 0 01-.343.107c-.255.073-.644.174-1.16.275-1.032.202-2.573.409-4.568.409-1.995 0-3.536-.207-4.568-.41a14.082 14.082 0 01-1.16-.274 7.393 7.393 0 01-.343-.107l-.012-.004h0-.001l-.014-.006-.017-.005c-.815-.27-1.469-.865-1.469-1.767h0v-.013a1.916 1.916 0 01.33-1.064c.202-.284.45-.567.743-.897l-.686-.607.686.607.023-.025c.337-.382.735-.831 1.043-1.323.322-.516.585-1.137.585-1.868 0-3.404 2.133-5.331 4.621-5.331h.478c2.488 0 4.621 1.927 4.621 5.331 0 .73.263 1.352.585 1.868.308.492.706.941 1.043 1.322l.023.026c.292.33.541.613.742.897.25.351.335.788.331 1.064zM10.857 20.122a.818.818 0 01-.624-.29h2.963a.818.818 0 01-.625.29h-1.713z"
        stroke="#fff"
        strokeWidth={1.832}
      />
    </Svg>
  );
}
function ActiveNotificationIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.084 14.424h0v.013c0 .955-.69 1.587-1.383 1.743l-.06.013-.057.021h0-.001l-.012.005a7.426 7.426 0 01-.343.107c-.255.073-.644.174-1.16.275-1.032.202-2.573.409-4.568.409-1.995 0-3.536-.207-4.568-.41a14.082 14.082 0 01-1.16-.274 7.393 7.393 0 01-.343-.107l-.012-.004h0-.001l-.014-.006-.017-.005c-.815-.27-1.469-.865-1.469-1.767h0v-.013a1.916 1.916 0 01.33-1.064c.202-.284.45-.567.743-.897l-.686-.607.686.607.023-.025c.337-.382.735-.831 1.043-1.323.322-.516.585-1.137.585-1.868 0-3.404 2.133-5.331 4.621-5.331h.478c2.488 0 4.621 1.927 4.621 5.331 0 .73.263 1.352.585 1.868.308.492.706.941 1.043 1.322l.023.026c.292.33.541.613.742.897.25.351.335.788.331 1.064zM10.857 20.122a.818.818 0 01-.624-.29h2.963a.818.818 0 01-.625.29h-1.713z"
        stroke="#fff"
        strokeWidth={1.832}
      />
      <Circle cx={18} cy={4} r={3.5} fill="#E72626" stroke="#191A32" />
    </Svg>
  );
}
function GenreIcon(props) {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={20} cy={20} r={20} fill="#39394E" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.053 16.371C10 16.113 10 15.801 10 15.18c0-.99 0-1.486.085-1.897a4.113 4.113 0 013.197-3.197c.411-.085.923-.085 1.946-.085.691 0 1.037 0 1.315.062.98.218 1.745.983 1.963 1.963.061.277.061.613.061 1.283v.91c0 1.523 0 2.285-.31 2.86-.24.443-.604.807-1.047 1.047-.575.31-1.337.31-2.86.31h-1.093c-.623 0-.934 0-1.193-.053a2.587 2.587 0 01-2.01-2.01zm0 7.258c-.053.258-.053.57-.053 1.193 0 .99 0 1.485.085 1.896a4.113 4.113 0 003.197 3.197c.411.085.923.085 1.946.085.691 0 1.037 0 1.315-.062a2.587 2.587 0 001.963-1.963c.061-.277.061-.612.061-1.283v-.91c0-1.523 0-2.284-.31-2.86a2.586 2.586 0 00-1.047-1.047c-.575-.31-1.337-.31-2.86-.31h-1.093c-.623 0-.934 0-1.193.053a2.587 2.587 0 00-2.01 2.01zm11.38 2.153c0-1.523 0-2.284.31-2.86.24-.443.604-.807 1.047-1.047.575-.31 1.337-.31 2.86-.31h1.093c.623 0 .934 0 1.193.053 1.011.209 1.802 1 2.01 2.01.054.26.054.57.054 1.194 0 .99 0 1.485-.085 1.896a4.113 4.113 0 01-3.197 3.197c-.411.085-.923.085-1.946.085-.691 0-1.037 0-1.315-.062a2.587 2.587 0 01-1.963-1.963c-.062-.277-.062-.612-.062-1.283v-.91zm.31-8.704c-.31-.575-.31-1.337-.31-2.86v-.91c0-.67 0-1.005.061-1.283a2.587 2.587 0 011.963-1.963c.278-.062.624-.062 1.315-.062 1.023 0 1.535 0 1.946.085a4.113 4.113 0 013.197 3.197c.085.411.085.906.085 1.897 0 .622 0 .934-.053 1.192a2.587 2.587 0 01-2.011 2.011c-.259.053-.57.053-1.193.053H25.65c-1.523 0-2.285 0-2.86-.31a2.587 2.587 0 01-1.047-1.047z"
        fill="#AAA"
      />
    </Svg>
  );
}
function TvShows(props) {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={20} cy={20} r={20} fill="#39394E" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.905 14.367C10 15.44 10 17.052 10 20.275c0 3.223 0 4.835.905 5.909.14.166.295.32.462.461 1.074.905 2.685.905 5.908.905 3.223 0 4.835 0 5.909-.905.166-.14.32-.295.461-.462.905-1.073.905-2.685.905-5.908 0-3.223 0-4.834-.905-5.908a3.854 3.854 0 00-.462-.462C22.11 13 20.498 13 17.275 13c-3.223 0-4.834 0-5.908.905-.167.14-.321.295-.462.462zm15.562 8.774c.136.191.311.394.662.8.276.32.414.48.504.554a1.442 1.442 0 002.348-.873c.019-.116.019-.327.019-.749v-5.196c0-.422 0-.633-.019-.748a1.442 1.442 0 00-2.348-.874c-.09.075-.228.234-.504.554-.35.406-.526.609-.662.8a4.95 4.95 0 000 5.732z"
        fill="#AAA"
      />
    </Svg>
  );
}
function PremiumPrice(props) {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={20} cy={20} r={20} fill="#39394E" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.18 19.15c.196.2.513.2 1.146.2h.779a.99.99 0 010 1.98h-.774c-.637 0-.955 0-1.151.203-.197.204-.185.514-.162 1.134.042 1.138.153 1.906.451 2.558a5.277 5.277 0 002.607 2.608c1.045.477 2.387.477 5.071.477h3.706c2.684 0 4.026 0 5.07-.477a5.276 5.276 0 002.608-2.608c.297-.652.41-1.42.451-2.558.023-.62.035-.93-.162-1.134-.196-.204-.514-.204-1.151-.204h-.774a.99.99 0 110-1.978h.779c.633 0 .95 0 1.146-.2.195-.2.188-.512.173-1.133-.031-1.35-.133-2.213-.462-2.934a5.276 5.276 0 00-2.608-2.607C25.88 12 24.537 12 21.853 12h-3.706c-2.684 0-4.026 0-5.07.477a5.276 5.276 0 00-2.608 2.607c-.329.721-.431 1.584-.462 2.934-.015.621-.022.932.173 1.133zm9.438-2.411a.446.446 0 01.765 0l.853 1.418a.447.447 0 00.282.205l1.613.373a.446.446 0 01.236.728l-1.085 1.25a.447.447 0 00-.108.331l.143 1.649a.447.447 0 01-.619.45l-1.524-.646a.447.447 0 00-.348 0l-1.524.646a.447.447 0 01-.619-.45l.143-1.649a.446.446 0 00-.107-.331l-1.085-1.25a.447.447 0 01.236-.728l1.613-.373a.446.446 0 00.281-.205l.854-1.418z"
        fill="#AAA"
      />
    </Svg>
  );
}
function PlayerIcon(props) {
  return (
    <Svg
      width={46}
      height={46}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={23} cy={23} r={20} fill="#39394E" />
      <Path
        d="M23 1.728c0-.954-.775-1.735-1.726-1.663a23 23 0 1016.723 40.373c.724-.622.72-1.721.045-2.396-.675-.675-1.764-.668-2.496-.056A19.546 19.546 0 014.943 30.48 19.544 19.544 0 0121.274 3.532c.95-.084 1.726-.85 1.726-1.804z"
        fill="#E72626"
      />
      <Path
        d="M18.5 18.186c0-.963 1.212-1.524 2.082-.962l7.87 5.081c.174.113.315.262.41.435a1.088 1.088 0 01-.031 1.109 1.247 1.247 0 01-.436.416l-7.87 4.545c-.875.507-2.025-.06-2.025-.997v-9.627z"
        fill="#fff"
      />
    </Svg>
  );
}
function Rating(props) {
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M17.266 13.85a.917.917 0 00-.266.808l.74 4.1a.9.9 0 01-.374.9.917.917 0 01-.975.067L12.7 17.8a.943.943 0 00-.417-.11h-.226a.678.678 0 00-.225.076L8.141 19.7c-.183.092-.39.124-.592.092a.926.926 0 01-.742-1.06l.742-4.1a.932.932 0 00-.266-.815L4.274 10.9a.9.9 0 01-.224-.942.936.936 0 01.74-.625l4.142-.6a.927.927 0 00.734-.508l1.825-3.742c.043-.083.099-.16.166-.225l.075-.058a.56.56 0 01.135-.108l.09-.034L12.1 4h.35c.314.032.59.22.734.5l1.85 3.725a.926.926 0 00.691.508l4.142.6c.35.05.642.292.758.625.11.335.015.701-.242.942l-3.116 2.95z"
        fill="#FFBE18"
      />
    </Svg>
  );
}
function HomeIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M3.5 22.89v-9.447c0-1.078.468-2.104 1.282-2.81l7.591-6.593a2.482 2.482 0 013.254 0l7.592 6.592a3.723 3.723 0 011.281 2.811v9.447a2.482 2.482 0 01-2.481 2.482h-3.14a1.24 1.24 0 01-1.24-1.24V19.78a1.24 1.24 0 00-1.242-1.241H11.84a1.24 1.24 0 00-1.241 1.24v4.351a1.24 1.24 0 01-1.241 1.241H5.982A2.482 2.482 0 013.5 22.89z"
        stroke="#696969"
        strokeWidth={2.172}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
function ActiveHome(props) {
  return (
    <Svg
      width={54}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={27} cy={27} r={26.5} stroke="#39394E" />
      <Path
        d="M15.334 35.897v-9.723c0-1.398.606-2.727 1.662-3.644l7.895-6.856a3.217 3.217 0 014.219 0l7.896 6.856a4.826 4.826 0 011.661 3.644v9.723a3.217 3.217 0 01-3.217 3.217h-2.799c-.888 0-1.608-.72-1.608-1.609v-4.374c0-.888-.72-1.608-1.609-1.608H24.83c-.888 0-1.609.72-1.609 1.608v4.374c0 .889-.72 1.609-1.608 1.609H18.55a3.217 3.217 0 01-3.217-3.217z"
        fill="#E72626"
      />
    </Svg>
  );
}

function Explore(props) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.435 14a9.435 9.435 0 11-18.87 0 9.435 9.435 0 0118.87 0zm2.23 0c0 6.443-5.222 11.665-11.665 11.665-6.442 0-11.665-5.222-11.665-11.665C2.335 7.557 7.558 2.334 14 2.334c6.443 0 11.666 5.223 11.666 11.666zm-5.912-3.345c.54-1.276-.74-2.565-2.02-2.033l-4.115 1.71a5.445 5.445 0 00-2.926 2.906l-1.736 4.104c-.54 1.276.74 2.565 2.02 2.033l4.114-1.71a5.446 5.446 0 002.927-2.906l1.736-4.104zm-5.28 1.736l2.576-1.07-1.087 2.568a3.216 3.216 0 01-1.727 1.717l-2.575 1.07 1.086-2.568a3.215 3.215 0 011.728-1.717z"
        fill="#696969"
      />
    </Svg>
  );
}
function ActiveExplore(props) {
  return (
    <Svg
      width={54}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={27} cy={27} r={26.5} stroke="#39394E" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 38.667c6.443 0 11.666-5.224 11.666-11.667S33.443 15.334 27 15.334c-6.444 0-11.667 5.223-11.667 11.666 0 6.444 5.223 11.667 11.667 11.667zm2.962-11.088a4.331 4.331 0 01-2.047 2.034l-4.994 2.367a.433.433 0 01-.576-.58l2.399-4.979a4.331 4.331 0 012.047-2.034l4.995-2.366a.433.433 0 01.575.58l-2.399 4.978z"
        fill="#E72626"
      />
    </Svg>
  );
}
function SaveIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.248 24.032v-16.4c0-2.429 2.095-4.398 4.679-4.398h8.146c2.584 0 4.678 1.969 4.678 4.397v16.4c0 .6-.724.946-1.24.593L14.92 20.1a1.641 1.641 0 00-1.839 0l-6.592 4.523c-.516.353-1.24.007-1.24-.592z"
        stroke="#696969"
        strokeWidth={2.479}
        strokeLinejoin="round"
      />
    </Svg>
  );
}
function ActiveSaveIcon(props) {
  return (
    <Svg
      width={54}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={27} cy={27} r={26.5} stroke="#39394E" />
      <Path
        d="M17.083 38.367V19.784c0-2.752 2.374-4.983 5.302-4.983h9.23c2.928 0 5.301 2.231 5.301 4.983v18.583c0 .68-.82 1.071-1.404.67l-7.47-5.124a1.86 1.86 0 00-2.084 0l-7.47 5.125c-.584.4-1.405.009-1.405-.67z"
        fill="#E72626"
      />
    </Svg>
  );
}
function ProfileIcon(props) {
  return (
    <Svg
      width={28}
      height={28}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask id="prefix__a" fill="#fff">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.001 13.41a5.484 5.484 0 100-10.969 5.484 5.484 0 000 10.968zM14 25.557c-5.476 0-9.915-1.36-9.915-4.175 0-2.816 4.439-6.02 9.915-6.02 5.476 0 9.915 3.204 9.915 6.02 0 2.815-4.44 4.175-9.915 4.175z"
        />
      </Mask>
      <Path
        d="M4.085 21.383h2.567-2.567zM14 15.363v2.566-2.567zm2.918-7.438a2.917 2.917 0 01-2.917 2.917v5.134a8.05 8.05 0 008.051-8.05h-5.134zm-2.917-2.917a2.917 2.917 0 012.917 2.917h5.134a8.05 8.05 0 00-8.05-8.05v5.133zm-2.917 2.917a2.917 2.917 0 012.917-2.917V-.125a8.05 8.05 0 00-8.05 8.05h5.133zm2.917 2.917a2.917 2.917 0 01-2.917-2.917H5.95a8.05 8.05 0 008.051 8.051v-5.134zM1.518 21.383c0 3.062 2.466 4.736 4.547 5.54 2.206.85 5.037 1.203 7.935 1.203v-5.134c-2.578 0-4.705-.326-6.087-.86-.689-.265-1.043-.525-1.196-.684-.067-.07-.078-.103-.073-.092.007.016.008.032.008.027H1.518zM14 12.796c-3.22 0-6.182.937-8.399 2.362-2.075 1.334-4.083 3.515-4.083 6.226h5.134c0-.106.211-.934 1.725-1.907 1.371-.881 3.366-1.547 5.623-1.547v-5.134zm12.482 8.588c0-2.711-2.008-4.892-4.083-6.226-2.218-1.425-5.18-2.362-8.4-2.362v5.134c2.258 0 4.253.666 5.624 1.547 1.514.973 1.726 1.802 1.726 1.907h5.133zM14 28.125c2.898 0 5.729-.353 7.935-1.204 2.082-.803 4.547-2.476 4.547-5.538H21.35c0 .004 0-.012.008-.028.004-.01-.006.021-.074.091-.153.16-.507.42-1.195.685-1.383.534-3.51.86-6.088.86v5.134z"
        fill="#696969"
        mask="url(#prefix__a)"
      />
    </Svg>
  );
}
function ActiveProfileIcon(props) {
  return (
    <Svg
      width={54}
      height={54}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx={27} cy={27} r={26.5} stroke="#39394E" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 26.409a5.485 5.485 0 100-10.97 5.485 5.485 0 000 10.97zm0 12.151c-5.477 0-9.917-1.36-9.917-4.176s4.44-6.021 9.916-6.021c5.477 0 9.917 3.205 9.917 6.021S32.476 38.56 27 38.56z"
        fill="#E72626"
      />
    </Svg>
  );
}

export {
  AppLogoLarge,
  Facebook,
  Google,
  Twitter,
  Camera,
  SearchIcon,
  NotificationIcon,
  ActiveNotificationIcon,
  GenreIcon,
  TvShows,
  PremiumPrice,
  PlayerIcon,
  Rating,
  HomeIcon,
  ActiveHome,
  Explore,
  ActiveExplore,
  SaveIcon,
  ActiveSaveIcon,
  ProfileIcon,
  ActiveProfileIcon,
};
